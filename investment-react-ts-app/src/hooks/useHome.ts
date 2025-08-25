import { ChangeEvent, useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import csvService from '../services/csvService';
import { validation, validationNumber } from '../validations/validations';

interface FormSubmitCsvFile {
    inputRef: any;
    selectedFile: boolean;
    disabled: boolean;
    visibleUploadFile: boolean;
    handleInputExcel: (e: ChangeEvent<HTMLInputElement>) => void;
    submitCsvFile: (e: React.FormEvent<HTMLFormElement>) => void;
    resetUploadFile: () => void;
    setVisibleUploadFile: React.Dispatch<React.SetStateAction<boolean>>;
};

const useHome = (): FormSubmitCsvFile => {
    const [csvFile, setCsvFile] = useState<string | undefined>(undefined);
    const [selectedFile, setSelectedFile] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(true);
    const [visibleUploadFile, setVisibleUploadFile] = useState<boolean>(false);

    const inputRef = useRef<any>(null);
    

    const resetUploadFile = () => {
        resetFile();
        setSelectedFile(false);
        setDisabled(true);
    };

    const resetFile = () => {
        inputRef.current.value = null;
    };

    const handleInputExcel = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        const reader = new FileReader();
        reader.onload = async (event) => {
            const data = new Uint8Array(event.target?.result as ArrayBuffer)
            const workbook = XLSX.read(data, { type: 'array'});
            let csvData = XLSX.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[0]])

            if (csvData && csvData.trim() !== '') {
                const rows = csvData.split('\n');
                const idNumbers = new Set<string>();

                console.log("rows: ", rows);
                console.log("rows.length: ", rows.length);

                for (let i = 1; i < rows.length; i++) {
                    const j = i + 1
                    const oneRow = rows[i].split(',');
                    if (oneRow[0].length < 2 || oneRow[0].length > 25) {
                        window.alert('שם פרטי בשורה ' + j + ' אינו תקין')
                        resetFile();
                        return
                    };
                    if (oneRow[1].length  < 2 || oneRow[1].length > 20) {
                        window.alert('שם משפחה בשורה ' + j + ' אינו תקין')
                        resetFile();
                        return
                    };
                    const authedId = validationNumber("number", oneRow[2])
                    if (oneRow[2].length != 9 || !authedId) {
                        window.alert('מספר הזהות בשורה ' + j + ' אינו תקין')
                        resetFile();
                        return
                    };
                    const authedPhone = validationNumber("number", oneRow[3])
                    if ((oneRow[3][0] !== '0' || oneRow[3][1] === '0' || oneRow[3][1] === '1' || oneRow[3][1] === '6' || !authedPhone) || 
                        ((oneRow[3][1] === '5' || oneRow[3][1] === '7') &&  oneRow[3].length != 10) || 
                        (oneRow[3].length != 9 && (oneRow[3][1] === '2' || oneRow[3][1] === '3' || oneRow[3][1] === '4' || oneRow[3][1] === '8' || oneRow[3][1] === '9'))) {
                        window.alert('מספר הטלפון בשורה ' + j + ' אינו תקין')
                        resetFile();
                        return
                    };
                    const authedEmail = validation("email", oneRow[4])
                    console.log("authedEmail: ", authedEmail);
                    if (oneRow[4].length > 50 || authedEmail) {
                        window.alert('כתובת האימייל בשורה ' + j + ' אינה חוקית')
                        resetFile();
                        return
                    };
                    const authedPassword = validation("password", oneRow[5])
                    console.log("authedPassword: ", authedPassword);
                    if (oneRow[4].length > 50 || authedPassword) {
                        window.alert('הסיסמה בשורה' + j + ' אינה תקינה, הסיסמה צריכה לכלול אות קטנה, אות גדולה, תו כלשהו, ומספר, לפחות מופע אחד מכל אחד מאלו')
                        resetFile();
                        return
                    };
                    if (idNumbers.has(oneRow[2])) {
                        window.alert('מספר הזהות בשורה ' + j + ' מופיע כבר בקובץ, וודא שאין כפילויות של מספרי זהות')
                        resetFile();
                        return
                    } else {
                        idNumbers.add(oneRow[2])
                    };
                };

                if (rows.length > 0) {
                    const Headers = ['firstName', 'lastName', 'idNumber', 'phone', 'email']
                    rows[0] = Headers.join(',');
                    csvData = rows.join('\n');
                };

                setCsvFile(csvData);
                setSelectedFile(true);
                setDisabled(false);
                console.log('setCsvFile(csvData)');
            } else {
                window.alert('הקובץ ריק או אינו תקין')
                resetFile();
            };

        };
        reader.readAsArrayBuffer(file!)
    };

    async function submitCsvFile (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { data, error } = await csvService(csvFile)
            if (error) {
                window.alert(`אירעה שגיאה בשליחת הקובץ\n ${error}`)
            } else if (data) {
                window.alert(data)
            };
        resetUploadFile()
    };

    return {
        inputRef,
        selectedFile,
        disabled,
        visibleUploadFile,
        handleInputExcel,
        submitCsvFile,
        resetUploadFile,
        setVisibleUploadFile
    }
}

export default useHome;