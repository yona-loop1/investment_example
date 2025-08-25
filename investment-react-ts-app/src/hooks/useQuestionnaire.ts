import React, { useState } from "react"
import { questionnaireService } from "../services/questionnaireService";
import { useNavigate } from "react-router-dom";
//import { UpdateDetilesInvestment } from '../components/distribution/detilesDistribution'


interface Questionnaire {
    switchingQuestions: boolean[];
    fillingAnswers: boolean[];
    currentQuestion: number;
    age: string;
    moneyValue: string;
    lengthInvestment: string;
    increment: () => void;
    decrement: () => void;
    updateAge: (e: string) => void
    updateMoney: (e: string) => void;
    updateLengthInvestment: (e: string) => void;
    submitAllData: (e: React.FormEvent<HTMLFormElement>) => void;
};

interface DataToSend {
    id: string;
    age: number;
    money: number;
    lengthInvestment: string;
};

// hook to handle for the component "QuestionnaireForm"
// The component handles three questions presented to the user
// each question shown alone to the user, and he move from one to other by press on a button
const useQuestionnaire = ():Questionnaire => {
    const [switchingQuestions = Array(5), setBrowsreQuestions] = useState<boolean[]>([false, true, false, false, false]); // array that contain booleans values, the index number that contain "true" it's the number of the question that show now
    const [fillingAnswers = Array(5), setFillingAnswers] = useState<boolean[]>([false, false, false, false, false]); // array that contain booleans values, each index number that contain "true" it's represent the number of a question that the user answered to it
    const [age, setAge] = useState<string>('');
    const [money, setMoney] = useState<number>(0);
    const [moneyValue, setMoneyValue] = useState<string>('');
    const [lengthInvestment, setLengthInvestment] = useState<string>('');
    
    const navigate = useNavigate()

    let currentQuestion = switchingQuestions.indexOf(true); // variable that contain and represent the current question number that shows now on the screen
    
    // Function to move from one question to the next
    function increment() { 
        if (currentQuestion === 2) {
            if ((money < 20000) || !moneyValue) {
                fillingAnswers[currentQuestion] = false,
                setFillingAnswers([...fillingAnswers])
                window.alert('עליך להזין סכום מינימלי בסך 20,000 ש"ח')
                return
            };
        };
        switchingQuestions[currentQuestion] = false,
        switchingQuestions[currentQuestion + 1] = true,
        setBrowsreQuestions([...switchingQuestions])
    };

    // Function to go back from one question to the previous one
    function decrement() {
        switchingQuestions[currentQuestion] = false,
        switchingQuestions[currentQuestion - 1] = true,
        setBrowsreQuestions([...switchingQuestions])  
    };
    
    // Mark whihc question as answered
    function updateAnswers() {
        fillingAnswers[currentQuestion] = true,
        setFillingAnswers([...fillingAnswers])
    };

    //
    function updateAge(e: string) {
        setAge(e)
        updateAnswers()
    };

    // A function to update that the second question has been answered, and what amount money the user chose,
    function updateMoney(e: string) {
        const moneyValue = e.replace(/[^0-9]/g, "")
        setMoneyValue(moneyValue)
        const userInput = parseInt(e)
        if (userInput) {
            if (userInput < 20000) {
            fillingAnswers[currentQuestion] = false,
            setFillingAnswers([...fillingAnswers])
            } else {
                setMoney(userInput)
                updateAnswers()
            }
        } else  {
            fillingAnswers[currentQuestion] = false,
            setFillingAnswers([...fillingAnswers])
        }
    };
    
    //
    function updateLengthInvestment(e: string) {
        setLengthInvestment(e)
        updateAnswers()
    };

    //
    const submitAllData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const ageSend = parseInt(age)
        const id = sessionStorage.getItem('id')
        const questionnaireData: DataToSend = {
            id: id!,
            age: ageSend,
            money: money,
            lengthInvestment: lengthInvestment
        };
        const { data, error } = await questionnaireService(questionnaireData);
        console.log("data: ", data, ",", "error: ", error);
        
        if (error) {
            window.alert(`התרחשה שגיאה, שליחת השאלון נכשלה\n ${error}`)
        } else if (data) {
            sessionStorage.setItem('money', moneyValue)
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
            navigate('/investmentPortfolio');
        };
    };

    return {
        switchingQuestions,
        fillingAnswers,
        currentQuestion,
        age,
        moneyValue,
        lengthInvestment,
        increment,
        decrement,
        updateAge,
        updateMoney,
        updateLengthInvestment,
        submitAllData,
    }
};

export default useQuestionnaire;