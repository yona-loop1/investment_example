import { useEffect, useState } from "react";
import { validation } from "../validations/validations";
import changePasswordService from "../services/changePasswordService";

export interface ChangePassword {
    idNumber: string;
    oldPassword: string;
    newPassword: string;
};

interface HomeCustomerOutput {
    id: string;
    firstName: string; 
    lastName: string;
    phone: string;
    email: string;
    date: string;
    disabled: string | boolean;
    oldPassword: string;
    newPassword: string;
    verificationPassword: string;
    oldPasswordVisible: boolean;
    newPasswordVisible: boolean;
    verificationPasswordVisible: boolean;
    popupVisible: boolean;
    changePopupVisible: boolean;
    ChangePasswordSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleOldPassword: (e: string) => void;
    handleNewPassword: (e: string) => void;
    handleVerificationPassword: (e: string) => void;
    setOldPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setNewPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setVerificationPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
    handleChangePopupVisible: (status: boolean) => void;
    handlerPopupFocus: () => void;
    handlerPopupBlur: () => void;
};

const useHomeCustomer = (): HomeCustomerOutput => {
    const [id, setId] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [date, setDate] = useState<string>('');

    useEffect(() => {
        setId(sessionStorage.getItem('id')!)
        setFirstName(sessionStorage.getItem('firstName')!);
        setLastName(sessionStorage.getItem('lastName')!);
        setPhone(sessionStorage.getItem('phone')!);
        setEmail(sessionStorage.getItem('email')!);
        setDate(sessionStorage.getItem('dateRegister')!);
    }, []);


    const [disabled, setDisabled] = useState<string | boolean>(false);
    const [oldPassword, setOldPassword] = useState<string>('');
    const [oldPasswordVisible, setOldPasswordVisible] = useState<boolean>(false);
    const [newPassword, setNewPassword] = useState<string>('');
    const [newPasswordVisible, setNewPasswordVisible] = useState<boolean>(false);
    const [verificationPassword, setVerificationPassword] = useState<string>('');
    const [verificationPasswordVisible, setVerificationPasswordVisible] = useState<boolean>(false);
    const [popupVisible, setPopupVisible] = useState<boolean>(false);
    const [changePopupVisible, setChangePopupVisible] = useState<boolean>(false);

    function handleOldPassword(e: string) {
        setOldPassword(e);
        setDisabled(false);
    };

    function handleNewPassword(e: string) {
        setNewPassword(e);
        setDisabled(false);
        setPopupVisible(false);
    };

    function handleVerificationPassword(e: string) {
        setVerificationPassword(e);
        setDisabled(false);
    };

    function handlerPopupFocus() {
        if (newPassword.length < 1) {
            setPopupVisible(true)
        }
    };

    function handlerPopupBlur() {
        setPopupVisible(false)
    };

    function handleChangePopupVisible(status: boolean) {
        setChangePopupVisible(status);
        setOldPassword('');
        setNewPassword('');
        setVerificationPassword('');
        setDisabled(false);
    };

    async function ChangePasswordSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Change password");
        if (!oldPassword || !newPassword || !verificationPassword) {
            setDisabled("יש למלא את כל השדות באופן תקין!")
            return
        } else {
            const invalidOldPassword = validation("password", oldPassword)
            if (invalidOldPassword) {
                setDisabled(invalidOldPassword)
                return
            } else {
                const invalidNewPassword = validation("password", newPassword)
                if (invalidNewPassword) {
                    setDisabled(invalidNewPassword)
                    return
                } else {
                    if (newPassword !== verificationPassword){
                        setDisabled("הסיסמה החדשה לא אומתה כראוי")
                        return
                    } else if (newPassword === verificationPassword) {
                        setDisabled(false)
                    };
                };
            };
        };

        const ChangePasswordData: ChangePassword = {
            idNumber: id,
            oldPassword: oldPassword,
            newPassword: newPassword
        };

        const { data, error } = await changePasswordService(ChangePasswordData);
        console.log("logged: ", data, error);
        if (error) {
            window.alert(`התרחשה שגיאה, החלפת הסיסמה לא בוצעה\n ${error}`)
        } else if (data) {
            console.log("come to data: ", data);
            handleChangePopupVisible(!changePopupVisible);
            window.alert(data);
        };
    };
    
    return {
        id,
        firstName,
        lastName,
        phone,
        email,
        date,
        disabled,
        oldPassword,
        newPassword,
        verificationPassword,
        oldPasswordVisible,
        newPasswordVisible,
        verificationPasswordVisible,
        popupVisible,
        changePopupVisible,
        ChangePasswordSubmit,
        handleOldPassword,
        handleNewPassword,
        handleVerificationPassword,
        setOldPasswordVisible,
        setNewPasswordVisible,
        setVerificationPasswordVisible,
        handlerPopupFocus,
        handlerPopupBlur,
        handleChangePopupVisible
    }
};

export default useHomeCustomer;