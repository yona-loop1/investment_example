import styled from "@emotion/styled";
import * as formStyles from '../../shared/form.styles';
import background from '../../assets/image/backgroundNewCustomer.jpg';
import { FaEye, FaEyeSlash } from "react-icons/fa";


export const InnerContainer = formStyles.Container
export const TitleH2 = formStyles.TitleH2
export const TitleSmall = formStyles.TitleSmall
export const ErrorText = formStyles.ErrorText


export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-image: linear-gradient(rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)),
                    url(${background});
    background-size: cover;
    align-items: center;
    justify-content: center;
    display: flex;
`

export const FormSpecific = styled(formStyles.Form)`
    width: 360px;
    background-color: rgba(255, 255, 255, 0.55);
    border-radius: 4px;
`

export const Error = styled.div`
    font-size: 12;
    color: red;
    direction: rtl;
    justify-content: flex-start;
    margin-top: 4px;
`

export const SabmitButton = styled(formStyles.Button)`
    padding: 8px 32px;
    &:disabled {
        background-color: rgb(210, 210, 210);
        cursor: not-allowed;
    }
`

export const SpaceInput = styled.div`
    width: 100%;
    height: fit-content;
    flex-direction: row-reverse;
    display: flex;
    justify-content: start;
    align-items: center;
`

export const PasswordSpaceInput = styled(SpaceInput)`
    position: relative;
`

export const Label = styled(formStyles.Label)`
    flex-shrink: 3;
    margin: 0px;
`

export const Input = styled(formStyles.Input)`
    margin: 12px;
`

export const LtrInput = styled(Input)`
    direction: ltr;
    justify-items: end;
`

export const FaEyeDiv = styled(FaEye)`
    position: absolute;
    margin-left: 6%;
    transform: 'translatey(-50%)';
    cursor: pointer;
`

export const FaEyeSlashDiv = styled(FaEyeSlash)`
    position: absolute;
    margin-left: 6%;
    transform: 'translatey(-50%)';
    cursor: pointer;
`

export const Popup = styled.div`
    position: absolute;
    bottom: 90%;
    background-color: white;
    margin-left: 3.4%;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 4px;
`