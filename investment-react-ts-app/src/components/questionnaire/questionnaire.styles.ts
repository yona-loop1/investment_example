import styled from "@emotion/styled";
import { Button } from "../../shared/form.styles";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`

export const TitleQuestion = styled.h3`
    margin: 10px;
    direction: rtl;
`

export const Note = styled(TitleQuestion)`
    margin: 100px 0px 0px 0px;
`

export const NoteSubmitStage = styled(Note)`
    margin-top: 180px;
`

export const QuestionSpace = styled.div`
    height: 450px;
    width: 800px;
    background-color: white;
    box-shadow: 0px 0px 10px lightgrey;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 45px;
    border-radius: 2px;
`

export const Question = styled.label`
    width: 100%;
    direction: rtl;
    font-size: xx-large;
    font-weight: 500;
    color: #222427;
`

export const Answer = styled.div`
    width: 100%;
`

export const SimpleText = styled.text`
    font-size: medium;
    color: rgb(34, 36, 39);
    margin: 10px 0px 10px 0px;
`

export const SimpleTextSubmitStage1 = styled(SimpleText)`
    margin: 0px;
`

export const SimpleTextSubmitStage2 = styled(SimpleText)`
    margin: 0px 0px 100px 0px;
`

export const RangeInput = styled.input`
    width: 80%;
    direction: ltr;
    list-style-type: circle;
    margin: 40px 0px 5px;
    cursor: grab;
`

export const List = styled.datalist`
    width: 80%;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 0px;
`

export const Age = styled.option`
    font-size: large;
    font-weight: 700;
`

export const ShowAge = styled.text`
    font-size: x-large;
    font-weight: 500;
    direction: rtl;
    margin-top: 40px;
    color: rgb(10, 105, 150);
    text-shadow: 0px 0px 2px lightblue;
`

export const Amount = styled(SimpleText)`
    margin: 0px 0px 0px 0px;
    font-size: x-small;
`

export const WantInvesting = styled(SimpleText)`
    margin: 100px 0px 5px 0px;
`

export const AmountInput = styled.input`
    height: 50px;
    font-size: x-large;
    font-weight: 500;
    color: rgb(34, 36, 39);
    padding: 0px 7px 0px 7px;
    direction: rtl;
    border-radius: 6px;
    &:focus {
        border-color: rgb(10, 105, 150);
        outline: none;
        box-shadow: 0px 0px 5px lightblue;
        background-color: rgb(252, 252, 252);
    }
    ::placeholder{
        font-size: large;
        color: rgb(10, 105, 150);
        text-align: center
    }
`

export const YearsSpace = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 60px;
`

export const YearsAnswer = styled.div`
    width: 110%;
    padding-right: 5px;
    outline: 1px solid lightgray;
    display: flex;
    flex-direction: row-reverse;
    :hover {
        background-color: rgb(250, 247, 247);
    }
`

export const YerasInput = styled.input`    
    :checked {
        border: 2px solid blue;
    }
    :checked + label {
        font-size: 21px;
        font-weight: 700;
        text-shadow: 0px 0px 2px #abddff;
        color: rgb(62, 62, 255);
    }
`

export const YearsLabel = styled.label`
    font-size: 22px;
    font-weight: 600;
    color: rgb(34, 36, 39);
    direction: rtl;
    margin-right: 7px;
    padding: 10px 0px;
`

export const PlaceButtons = styled.div`
    height: 70px;
    width: 860px;
    display: flex;
    flex-direction: row;
    background: none;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`

export const PreviousButton = styled.button`
    color: #a9a9a9;
    font-size: 22px;
    direction: rtl;
    background: none;
    width: fit-content;
    border-radius: 2px;
    border: none;
    padding: 14px 30px;
    &:hover { 
        cursor: pointer;
        background-color: rgb(240, 240, 240);
    }
`

export const NextButton = styled(Button)`
    font-size: 22px;
    padding: 12px 28px;
    box-shadow: 0px 0px 3px grey;
    &:disabled {
        background-color: rgb(210, 210, 210);
        cursor: not-allowed;
    }
`

