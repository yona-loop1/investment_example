import styled from "@emotion/styled";
import * as formStyles from '../../shared/form.styles';
import * as customerStyles from './registerCustomer.styles';
import * as registerStyles from './registerCustomer.styles';


export const Label = formStyles.Label
export const Input = formStyles.Input
export const Button = formStyles.Button
export const ErrorText = formStyles.ErrorText

export const Container = styled(customerStyles.Container)`
    align-items: flex-start;
`

export const InnerContainer = styled(customerStyles.FormSpecific)`
    width: 200px;
    border: none;
    background-color: rgba(255, 255, 255, 0.35);
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled(formStyles.TitleH2)`
    font-size: 17px;
    margin: 14px 5px 5px 5px;
`

export const PasswordSpaceInput = styled(registerStyles.PasswordSpaceInput)`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
`

export const LtrInput = styled(registerStyles.LtrInput)`
    margin: 0px;
    width: 95%;
`

export const FaEyeDiv = styled(registerStyles.FaEyeDiv)`
    left: 0%;
    bottom: 13px;
`

export const FaEyeSlashDiv = styled(registerStyles.FaEyeSlashDiv)`
    left: 0%;
    bottom: 13px;
`