import React, { useState } from "react";
import loginService from "../services/loginService";
import { useNavigate, useOutletContext } from "react-router-dom";
import { validation } from "../validations/validations";

interface OutletContext {
    renderLayout: React.Dispatch<React.SetStateAction<string>>
};

export interface ToLogged {
    idNumber: string;
    password: string;
};

interface LoginOutput {
    idNumber: string;
    disabled: string | boolean;
    password: string;
    passwordVisible: boolean;
    setPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
    handleIdNumber: (e: string) => void;
    handlePassword: (e: string) => void;
    send: (e: React.FormEvent<HTMLFormElement>) => void;
};

const useLogin = ():LoginOutput => {
    const [idNumber, setIdNumber] = useState<string>('');
    const [disabled, setDisabled] = useState<string | boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const navigate = useNavigate();
    const { renderLayout } = useOutletContext<OutletContext>();
    
    function handleIdNumber(e: string) {
        const idNumber = e.replace(/[^0-9]/g, "")
        setIdNumber(idNumber)
        setDisabled(false)
    };

    function handlePassword(e: string) {
        setPassword(e);
        setDisabled(false);
    };

    function displayUserName() {
        renderLayout('again')
    };
    
    async function send(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!idNumber || !password) {
            setDisabled("יש למלא את כל השדות באופן תקין!")
            return
        } else {
            const invalidPassword = validation("password", password)
            if (invalidPassword) {
                setDisabled(invalidPassword)
                return
            } else {
                setDisabled(false)
            };
        };

        const loginData: ToLogged = {
            idNumber: idNumber,
            password: password
        };
        
        const { data, error } = await loginService(loginData)
        console.log("datalogin: ", data, ",", "errorlogin: ", error);
        if (error) {
            window.alert(`התרחשה שגיאה במהלך ההתחברות \n ${error}`)
        } else if (data) {
            sessionStorage.setItem('id', data.idNumber)
            sessionStorage.setItem('firstName', data.firstName)
            sessionStorage.setItem('lastName', data.lastName)
            sessionStorage.setItem('phone', data.phone)
            sessionStorage.setItem('email', data.email)
            sessionStorage.setItem('dateRegister', data.dateRegister)

            console.log("ddddddd: ",  data.sumAllInvest, data.stockIsraelPercentage, data.firstName, data.financialSum);
            
            sessionStorage.setItem('money', data.sumAllInvest)
            sessionStorage.setItem('StockIsraelPercentage', data.stockIsraelPercentage)
            sessionStorage.setItem('StockAbroadPercentage', data.stockAbroadPercentage)
            sessionStorage.setItem('GovernmentBondsPercentage', data.governmentBondsPercentage)
            sessionStorage.setItem('CorporateBondsIsraelPercentage', data.corporateBondsIsraelPercentage)
            sessionStorage.setItem('CorporateBondsAbroadPercentage', data.corporateBondsAbroadPercentage)
            sessionStorage.setItem('FinancialPercentage', data.financialPercentage)
            sessionStorage.setItem('StockIsraelsum', data.stockIsraelSum)
            sessionStorage.setItem('StockAbroadsum', data.stockAbroadSum)
            sessionStorage.setItem('GovernmentBondssum', data.governmentBondsSum)
            sessionStorage.setItem('CorporateBondsIsraelsum', data.corporateBondsIsraelSum)
            sessionStorage.setItem('CorporateBondsAbroadsum', data.corporateBondsAbroadSum)
            sessionStorage.setItem('Financialsum', data.financialSum)

            displayUserName();
            navigate('/home');
        };
    }

    return {
        idNumber,
        disabled,
        password,
        passwordVisible,
        setPasswordVisible,
        handleIdNumber,
        handlePassword,
        send
    }
};

export default useLogin;