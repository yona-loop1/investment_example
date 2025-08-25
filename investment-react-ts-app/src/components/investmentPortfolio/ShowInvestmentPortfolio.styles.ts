import styled from "@emotion/styled";
import { QuestionSpace } from '../questionnaire/questionnaire.styles'
import graph from "../../assets/image/cyberscooty-graph.svg";


const StockIsraelColor = '#ff896e'
const StockAbroadColor = '#1d255e'
const DebenturesGovernmentColor = '#0ad7ba'
const DebenturesCorporateIsraelColor = '#1c8fff'
const DebenturesCorporateAbroadColor = '#70bdfc'
const FinancialColor = '#d2a5fc'

export const Container = styled.div`
    height: 100%;
    width: 100%;
    //background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-image: linear-gradient(rgba(243, 246, 244, 0.95), rgba(243, 246, 244, 0.95)),
                    url(${graph});
    background-size: cover;
`

export const Title = styled.h1`
    width: 100%;
    direction: rtl;
    //font-size: xx-large;
    //font-weight: 500;
    color: #222427;
    margin: 50px 0px;
`

export const ResultSpace = styled(QuestionSpace)`
    //background-color: rgba(255, 255, 255, 0.1);
    background-color: none;
`

export const Charts = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 20px;
    margin-top: 50px;
`

export const InnerCircle = styled.div`
    height: 185px;
    width: 185px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 0px 20px lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CircleText = styled.h3`
    direction: rtl;
    font-weight: 500;
`

export const ListSpace = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
`

export const List = styled.ul`
    width: fit-content;
    font-size: medium;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    padding: 0px;   
`

export const ListElements = styled.li`
    //margin-right: 10px;
    list-style-type: disc;
    font-size: large;
    font-weight: 600;
    direction: rtl;
    padding: 5px 12px 0px 0px;
    ::marker {
        font-size: 25px;
    }
`

export const ElementSpace = styled(ListElements)`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
`

export const StockIsrael = styled(ListElements)`
    color: ${StockIsraelColor};
`

export const StockAbroad = styled(ListElements)`
    color: ${StockAbroadColor};
`

export const DebenturesGovernment = styled(ListElements)`
    color: ${DebenturesGovernmentColor};
`

export const DebenturesCorporateIsrael = styled(ListElements)`
    color: ${DebenturesCorporateIsraelColor};
`

export const DebenturesCorporateAbroad = styled(ListElements)`
    color: ${DebenturesCorporateAbroadColor};
`

export const Financial = styled(ListElements)`
    color: ${FinancialColor};
`

export const PercentageSpace = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-right: 10px;
    margin-top: 18px;
    justify-self: flex-end;
`

export const Percentage = styled.text`
    font-size: large;
    font-weight: 600;
    padding-top: 13px;
`

export const PercentageFirst = styled(Percentage)`
    color: ${StockIsraelColor};
`

export const PercentageSecond = styled(Percentage)`
    color: ${StockAbroadColor};
`

export const PercentageThird = styled(Percentage)`
    color: ${DebenturesGovernmentColor};
`

export const PercentageFourth = styled(Percentage)`
    color: ${DebenturesCorporateIsraelColor};
`

export const PercentageFifth = styled(Percentage)`
    color: ${DebenturesCorporateAbroadColor};
`

export const PercentageSixth = styled(Percentage)`
    color: ${FinancialColor};
`

export const Cake = styled.div<{
    endStockIsrael: number, 
    endStockAbroad: number, 
    endDebenturesGovernment: number, 
    endDebenturesCorporateIsrael: number, 
    endDebenturesCorporateAbroad: number }>`

    height: 250px;
    width: 250px;
    border-radius: 50%;
    background: conic-gradient(
        ${StockIsraelColor} 0% ${({endStockIsrael}) => endStockIsrael}%,
        ${StockAbroadColor} ${({endStockIsrael}) => endStockIsrael}% ${({endStockAbroad}) => endStockAbroad}%, 
        ${DebenturesGovernmentColor} ${({endStockAbroad}) => endStockAbroad}% ${({endDebenturesGovernment}) => endDebenturesGovernment}%, 
        ${DebenturesCorporateIsraelColor} ${({endDebenturesGovernment}) => endDebenturesGovernment}% ${({endDebenturesCorporateIsrael}) => endDebenturesCorporateIsrael}%,
        ${DebenturesCorporateAbroadColor} ${({endDebenturesCorporateIsrael}) => endDebenturesCorporateIsrael}% ${({endDebenturesCorporateAbroad}) => endDebenturesCorporateAbroad}%,
        ${FinancialColor} ${({endDebenturesCorporateAbroad}) => endDebenturesCorporateAbroad}% 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 20px lightgrey;
    margin: 20px;
    justify-self: start;
`