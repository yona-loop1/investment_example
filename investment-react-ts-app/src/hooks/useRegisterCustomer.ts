import { useState } from "react"
import registerNewCustomerService from "../services/registeringService";
import { useNavigate, useOutletContext } from "react-router-dom";
import { validation } from "../validations/validations";


interface OutletContext {
    renderLayout: React.Dispatch<React.SetStateAction<string>>
};

export interface RegisterProps {
    details?: RegisterDetails
};

export interface RegisterDetails {
    idNumber: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
};

interface HooksOutput {
    isConnect: boolean;
    firstName: string;
    lastName: string;
    phone: string;
    idNumber: string;
    email: string;
    isCellPhone: boolean;
    disabled: string | boolean;
    password: string;
    verificationPassword: string;
    passwordVisible: boolean;
    passwordVisibleVerification: boolean;
    popupVisible: boolean;
    setPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setPasswordVisibleVerification: React.Dispatch<React.SetStateAction<boolean>>;
    handleFirstName: (e: string) => void;
    handleLastName: (e: string) => void;
    handlePhoneNumber: (e: string) => void;
    handleIdNumber: (e: string) => void;
    handleEmailAddress: (e: string) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handlePassword: (e: string) => void;
    handleVerificationPassword: (e: string) => void;
    handlerPopupFocus: () => void;
    handlerPopupBlur: () => void;
};

const useRegisterCustomer = (datails: RegisterProps): HooksOutput => {
    const [firstName, setFirstName] = useState<string>(datails.details?.firstName || '');
    const [lastName, setLastName] = useState<string>(datails.details?.lastName || '');
    const [phone, setPhoneNumber] = useState<string>(datails.details?.phone || '');
    const [idNumber, setIdNumber] = useState<string>(datails.details?.idNumber || '');
    const [email, setEmailAddress] = useState<string>(datails.details?.email || '');
    const [password, setPassword] = useState<string>('');
    const [verificationPassword, setVerificationPassword] = useState<string>('');
    const [disabled, setDisabled] = useState<string | boolean>(false);
    const [isCellPhone, setIsCellPhone] = useState<boolean>(false);
    const [isConnect, setIsConnect] = useState<boolean>(datails.details?.idNumber ? true : false);
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [passwordVisibleVerification, setPasswordVisibleVerification] = useState<boolean>(false);
    const [popupVisible, setPopupVisible] = useState<boolean>(false);
    
    const navigate = useNavigate()
    const { renderLayout } = useOutletContext<OutletContext>();

    function handleFirstName(e: string) {
        const name = e.replace(/[^a-zא-ת\s]/gi, "") // can write also so: /[^a-z ^א-ת]/gi
        setFirstName(name);
        setDisabled(false);
    };
    
    function handleLastName(e: string) {
        const family = e.replace(/[^a-zא-ת\s]/gi, "") // can write also so: /[^a-z ^א-ת]/gi
        setLastName(family);
        setDisabled(false);
    };

    function handlePhoneNumber(e: string) {
        const phoneNumber = e.replace(/[^0-9]/g, "")
        setPhoneNumber(phoneNumber);
        setDisabled(false);
        if (phone[0] === '0' && (phone[1] === '5' || phone[1] === '7')) {
            setIsCellPhone(true)
        } else {
            setIsCellPhone(false)
        };
    };

    function handleIdNumber(e: string) {
        const idNumber = e.replace(/[^0-9]/g, "")
        setIdNumber(idNumber);
        setDisabled(false);
    };

    function handleEmailAddress(e: string) {
        setEmailAddress(e);
        setDisabled(false);
    };

    function handlePassword(e: string) {
        setPassword(e);
        setDisabled(false);
        setPopupVisible(false)
    };

    function handleVerificationPassword(e: string) {
        setVerificationPassword(e);
        setDisabled(false);
    };

    function handlerPopupFocus() {
        if (password.length < 1) {
            setPopupVisible(true)
        }
    };

    function handlerPopupBlur() {
        setPopupVisible(false)
    };

    function displayUserName() {
        renderLayout('again')
    };

    // function updateAllInputs(note: string) {
    //     setFirstName(note);
    //     setLastName(note);
    //     setPhoneNumber(note);
    //     setIdNumber(note);
    //     seteEmailAddress(note);
    // };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!firstName || !lastName || !idNumber || !phone || !email || (!isConnect && (!password || !verificationPassword))) {
            setDisabled("יש למלא את כל השדות באופן תקין!")
            return
        } else {
            const invalidEmail = validation("email", email)
            if (invalidEmail) {
                setDisabled(invalidEmail)
                return
            } else {
                if (!isConnect) {
                    const invalidPassword = validation("password", password)
                    if (invalidPassword) {
                        setDisabled(invalidPassword)
                        return
                    } else {
                        if (password !== verificationPassword){
                            setDisabled("הסיסמה לא אומתה כראוי")
                            return
                        } else if (password === verificationPassword) {
                            setDisabled(false)
                        };
                    };
                } else {
                    setDisabled(false);
                };
            };
        };
        const inputs: RegisterDetails = {
            idNumber: idNumber,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            password: password
        };
        const { data, error } = await registerNewCustomerService(inputs, isConnect);
        console.log("logged: ", data, error);
        if (error) {
            window.alert(`התרחשה שגיאה, הרישום לא בוצע\n ${error}`)
        } else if (data) {
            sessionStorage.setItem('id', idNumber)
            sessionStorage.setItem('firstName', firstName)
            sessionStorage.setItem('lastName', lastName)
            sessionStorage.setItem('phone', phone)
            sessionStorage.setItem('email', email)
            if (!!data.date) {
                sessionStorage.setItem('dateRegister', data.date)
            }
            displayUserName()
            window.alert(data.message ? data.message : data)
            navigate('/home')
        };
    };

    return {
        isConnect,
        firstName,
        lastName,
        phone,
        idNumber,
        email,
        isCellPhone,
        disabled,
        password,
        verificationPassword,
        passwordVisible,
        passwordVisibleVerification,
        popupVisible,
        handleFirstName,
        handleLastName,
        handlePhoneNumber,
        handleIdNumber,
        handleEmailAddress,
        handleSubmit,
        handlePassword,
        handleVerificationPassword,
        setPasswordVisible,
        setPasswordVisibleVerification,
        handlerPopupFocus,
        handlerPopupBlur
    }
};

export default useRegisterCustomer;