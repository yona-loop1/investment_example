import styled from "@emotion/styled";
import SuezOne from "../../assets/fonts/SuezOne-Regular.ttf";
import font from "../../assets/fonts/NotoSansHebrew_Condensed-Light.ttf";
import { Button } from "../../shared/form.styles";
import money from "../../assets/image/newimage.jpg";


export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(rgba(243, 246, 244, 0.9), rgba(243, 246, 244, 0.9)),
                    url(${money});
    background-size: cover;
`

export const WelcomeArea = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Welcome = styled.text`
    direction: rtl;
    color: rgb(34, 36, 39);
    @font-face {
        font-family: "Suez One";
        src: 
        url(${SuezOne}) format("truetype");
        unicode-range: U+0590-05FF;
    }
    font-family: "Suez One", sans-serif;
`

export const WelcomeTitle = styled(Welcome)`
    font-size: 65px;
    margin: 40px 10px;
`

export const WelcomeMediumText = styled(Welcome)`
    font-size: 23px;
`

export const WelcomeSmallText = styled.text`
    font-size: 19px;
    margin: 10px 0px 40px 10px;
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

export const WelcomeText = styled(WelcomeSmallText)`
    margin: 40px 0px 0px 0px;
`

export const WelcomeButton = styled(Button)`
    padding: 6px 38px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgb(189, 182, 182);
    margin: 10px;
`

export const Excel = styled.input`
`

export const Space = styled.div`
    width: 100%;
    height: 120px;
`