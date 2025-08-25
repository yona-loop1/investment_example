import React from "react";
import * as styles from './homeCustomer.styles';
import useHomeCustomer from "../../hooks/useHomeCustomer";
import { Link } from "react-router-dom";


const HomeCustomer: React.FC = () => {
    const {
        id,
        firstName,
        lastName,
        phone,
        email,
        date,
        disabled,
        oldPassword,
        newPassword,
        verificationPassword,
        oldPasswordVisible,
        newPasswordVisible,
        verificationPasswordVisible,
        popupVisible,
        changePopupVisible,
        ChangePasswordSubmit,
        handleOldPassword,
        handleNewPassword,
        handleVerificationPassword,
        setOldPasswordVisible,
        setNewPasswordVisible,
        setVerificationPasswordVisible,
        handlerPopupFocus,
        handlerPopupBlur,
        handleChangePopupVisible
    } = useHomeCustomer()

    return(
        <styles.Container>
            <styles.WelcomeArea>
                <styles.Space/>
                <styles.Text>שלום</styles.Text>
                <styles.UserDetails>{firstName} {lastName}</styles.UserDetails>
                <styles.Space/>
                <styles.Text>להלן פרטיך האישיים השמורים אצלנו במערכת</styles.Text>
                <styles.DetailsSpace>
                    <styles.DetailsInnerSpace>
                        <styles.DetailsLabel>שם פרטי:</styles.DetailsLabel>
                        <styles.SpaceLetter/>
                        <styles.UserDetails>{firstName}</styles.UserDetails>
                    </styles.DetailsInnerSpace>
                    <styles.DetailsInnerSpace>
                        <styles.DetailsLabel>שם משפחה:</styles.DetailsLabel>
                        <styles.SpaceLetter/>
                        <styles.UserDetails>{lastName}</styles.UserDetails>
                    </styles.DetailsInnerSpace>
                    <styles.DetailsInnerSpace>
                        <styles.DetailsLabel>מס' זהות:</styles.DetailsLabel>
                        <styles.SpaceLetter/>
                        <styles.UserDetails>{id}</styles.UserDetails>
                    </styles.DetailsInnerSpace>
                    <styles.DetailsInnerSpace>
                        <styles.DetailsLabel>מס' טלפון:</styles.DetailsLabel>
                        <styles.SpaceLetter/>
                        <styles.UserDetails>{phone}</styles.UserDetails>
                    </styles.DetailsInnerSpace>
                    <styles.DetailsInnerSpace>
                        <styles.DetailsLabel>כתובת אימייל:</styles.DetailsLabel>
                        <styles.SpaceLetter/>
                        <styles.UserEmail>{email}</styles.UserEmail>
                    </styles.DetailsInnerSpace>
                    <styles.DetailsInnerSpace>
                        <styles.DetailsLabel>תאריך הרשמתך לתוכנית:</styles.DetailsLabel>
                        <styles.SpaceLetter/>
                        <styles.UserDetails>{date}</styles.UserDetails>
                    </styles.DetailsInnerSpace>
                </styles.DetailsSpace>
                <styles.Space/>
                <styles.SmallText>לעדכון פרטיך האישיים לחץ <Link to={'/register'}>כאן</Link></styles.SmallText>
                <styles.SmallText>להחלפת הסיסמה לחץ <text onClick={() => handleChangePopupVisible(!changePopupVisible)} style={{cursor: "pointer"}}>כאן</text></styles.SmallText>
            {changePopupVisible &&
                <styles.ChangePasswordContainer
                onSubmit={ChangePasswordSubmit}
                >
                    <styles.ChangePasswordSpaceInput>
                        <styles.ChangePasswordTitle>סיסמה ישנה</styles.ChangePasswordTitle>
                            <styles.ChangePasswordLtrInput
                            type={oldPasswordVisible ? 'text' : 'password'}
                            value={oldPassword}
                            onChange={(e) => handleOldPassword(e.target.value)}
                            minLength={8}
                            maxLength={12} 
                            />
                            {oldPasswordVisible ? 
                            <styles.ChangePasswordFaEyeDiv onClick={() => setOldPasswordVisible(!oldPasswordVisible)}/> 
                            : <styles.ChangePasswordFaEyeSlashDiv onClick={() => setOldPasswordVisible(!oldPasswordVisible)}/>}
                    </styles.ChangePasswordSpaceInput>
                    <styles.ChangePasswordSpaceInput>
                        <styles.ChangePasswordTitle>סיסמה חדשה</styles.ChangePasswordTitle>
                            <styles.ChangePasswordLtrInput
                            type={newPasswordVisible ? 'text' : 'password'}
                            value={newPassword}
                            onChange={(e) => handleNewPassword(e.target.value)}
                            minLength={8}
                            maxLength={12}
                            onFocus={handlerPopupFocus}
                            onBlur={handlerPopupBlur}
                            />
                            {popupVisible &&
                            <styles.ChangePasswordPopup>בחר סיסמה חזקה באורך 8 - 12 תווים</styles.ChangePasswordPopup>}
                            {newPasswordVisible ? 
                            <styles.ChangePasswordFaEyeDiv onClick={() => setNewPasswordVisible(!newPasswordVisible)}/> 
                            : <styles.ChangePasswordFaEyeSlashDiv onClick={() => setNewPasswordVisible(!newPasswordVisible)}/>}
                    </styles.ChangePasswordSpaceInput>
                    <styles.ChangePasswordSpaceInput>
                        <styles.ChangePasswordTitle>אימות סיסמה חדשה</styles.ChangePasswordTitle>
                            <styles.ChangePasswordLtrInput
                            type={verificationPasswordVisible ? 'text' : 'password'}
                            value={verificationPassword}
                            onChange={(e) => handleVerificationPassword(e.target.value)}
                            minLength={8}
                            maxLength={12} 
                            />
                            {verificationPasswordVisible ? 
                            <styles.ChangePasswordFaEyeDiv onClick={() => setVerificationPasswordVisible(!verificationPasswordVisible)}/> 
                            : <styles.ChangePasswordFaEyeSlashDiv onClick={() => setVerificationPasswordVisible(!verificationPasswordVisible)}/>}
                    </styles.ChangePasswordSpaceInput>
                    <styles.ChangePasswordButton
                    type="submit"
                    >עדכן סיסמה</styles.ChangePasswordButton>
                    {disabled &&
                    <styles.ChangePasswordErrorText>{disabled}</styles.ChangePasswordErrorText>
                    }
                </styles.ChangePasswordContainer>
            }
            </styles.WelcomeArea>
        </styles.Container>
    )
};

export default HomeCustomer;