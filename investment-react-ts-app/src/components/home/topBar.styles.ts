import styled from "@emotion/styled";

export const Container = styled.div`
    height: 55px;
    width: 100%;
    background-color: rgba(34, 36, 39);
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
`

export const Navigation = styled.div<{logged: boolean}>`
    justify-self: flex-start;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    justify-items: center;
    margin-right: ${({ logged }) => (logged ? "0px" : "20px")};
`

export const Text = styled.text<{ isConnected?: boolean}>`
    color: rgb(219, 227, 232);
    font-size: 15px;
    direction: rtl;
    padding: 19px 13px 19px 13px;
    cursor: pointer; // add change bacground when cursor
    background-color: ${({ isConnected }) => (isConnected ? "rgba(67, 69, 71)" : "none")};
`

export const SignIn = styled(Text)<{ logged: boolean}>`
    color: rgb(25, 130, 255);
    font-size: 17px;
    font-weight: 700;
    margin-right: ${({ logged }) => (logged ? "20px" : "0px")};
`

export const Home = styled(SignIn)`
    margin-left: 40px;
    margin-right: 0px;
`

export const UserName = styled.text`
    direction: rtl;
    font-size: 15px;
    color: rgb(219, 227, 232);
    margin-right: auto;
    margin-left: 40px;
`

export const SignOut = styled.button`
    color: rgb(25, 130, 255);
    font-size: 17px;
    font-weight: 700;
    direction: rtl;
    padding: 19px 13px 19px 13px;
    background: none;
    cursor: pointer; // add change bacground when cursor
`