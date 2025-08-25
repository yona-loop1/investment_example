import styled from "@emotion/styled";
import * as homeStyles from '../home/home.styles';
import font from "../../assets/fonts/NotoSansHebrew_Condensed-Light.ttf";
import * as loginStyles from './Login.styles';
import * as registerStyles from './registerCustomer.styles';


export const Container = homeStyles.Container
export const WelcomeArea = homeStyles.WelcomeArea

export const Text = styled.div`
    font-size: 30px;
    direction: rtl;
    color: rgb(34, 36, 39);
    @font-face {
        font-family: "Noto Sans Hebrew Condensed Light";
        src: url(${font});
        font-stretch: ultra-expanded;
    }
    font-family: "Noto Sans Hebrew Condensed Light", sans-serif;
    font-stretch: ultra-expanded;
`

export const SmallText = styled(Text)`
    font-size: 22px;
`

export const UserDetails = styled(Text)`
    font-size: 22px;
    color: rgb(29, 40, 88);
`

export const UserEmail = styled(UserDetails)`
    direction: ltr;
`

export const DetailsLabel = styled.div`
    direction: rtl;
    font-size: 20px;
    font-weight: 400;
    color: rgb(34, 36, 39);
`

export const Space = styled.div`
    width: 100%;
    height: 60px;
`

export const SpaceLetter = styled.div`
    width: 8px;
`

export const DetailsSpace = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 10px 0px;
`

export const DetailsInnerSpace = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-evenly;
`

export const ChangePasswordContainer = styled(loginStyles.InnerContainer)`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.3);
    right: 75%;
    top: 30%;
    margin-top: 0px;
    box-shadow: 0px 0px 6px rgb(207, 207, 207);
    border-radius: 0px;
    border: 0.5px solid rgb(166, 210, 251);
`

export const ChangePasswordTitle = loginStyles.Title
export const ChangePasswordInput = loginStyles.Input
export const ChangePasswordSpaceInput = loginStyles.PasswordSpaceInput
export const ChangePasswordLtrInput = loginStyles.LtrInput
export const ChangePasswordFaEyeDiv = loginStyles.FaEyeDiv
export const ChangePasswordFaEyeSlashDiv = loginStyles.FaEyeSlashDiv
export const ChangePasswordButton = loginStyles.Button
export const ChangePasswordErrorText = loginStyles.ErrorText
export const ChangePasswordPopup = registerStyles.Popup