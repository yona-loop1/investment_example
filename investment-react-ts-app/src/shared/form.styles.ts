import styled from "@emotion/styled"

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const Form = styled.form`
    height: fit-content;
    width: 300px;
    border-radius: 10px;
    padding: 30px 50px;
    border: 0.5px solid;
    border-color: #8196EB;
    background-color: white; //rgba(255, 255, 255, 0.5)
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TitleH2 = styled.h2`
    margin: 5px;
    color: #8196EB;
    direction: rtl;
    /* text-align: right; */
`

export const TitleSmall = styled.h4`
    direction: rtl;
    margin: 10px;
    color: black;
`

export const Label = styled.label`
    margin-top: 15px;
    margin-bottom: 4px;
    width: 100%;
    color: black;
    display: block;
    font-size: 14px;
    direction: rtl;
    text-align: right;
    color: #8196EB;
`

export const Button = styled.button`
    padding: 8px 18px;
    color: rgb(236, 245, 244);
    background-color: rgb(91, 199, 177);
    font-size: 20px;
    border-radius: 2px;
    border: none;
    margin-top: 20px;
    cursor: pointer;
    :hover {
        background-color: rgb(15, 185, 151);
    }
`

export const Input = styled.input`
    direction: rtl;
    width: 95%;
    border: 1px solid #8196EB;
    border-radius: 4px;
    background-color: whitesmoke;
    font-size: 20px;
    padding: 10px 6px;
`

export const ErrorText = styled.text`
    direction: rtl;
    color: red;
    font-size: 14px;
    margin: 3px;
`