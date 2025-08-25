import * as styles from './registerCustomer.styles';
import useRegisterCustomer, { RegisterProps } from '../../hooks/useRegisterCustomer';


const RegisterCustomer = ({ details }: RegisterProps) => {
    const {
        isConnect,
        firstName,
        lastName,
        phone,
        idNumber,
        email,
        isCellPhone,
        disabled,
        password,
        verificationPassword,
        passwordVisible,
        passwordVisibleVerification,
        popupVisible,
        handleFirstName,
        handleLastName,
        handlePhoneNumber,
        handleIdNumber,
        handleEmailAddress,
        handleSubmit,
        handlePassword,
        handleVerificationPassword,
        setPasswordVisible,
        setPasswordVisibleVerification,
        handlerPopupFocus,
        handlerPopupBlur
    } = useRegisterCustomer({details})

    return (
        <styles.Container>
            <styles.InnerContainer>
                <styles.FormSpecific
                onSubmit={handleSubmit}
                >
                    <styles.TitleH2>{isConnect ? 'עדכון פרטי לקוח' : 'לקוח חדש'}</styles.TitleH2>
                    <styles.TitleSmall>הזן את פרטיך בשדות המתאימים</styles.TitleSmall>
                    <styles.SpaceInput>
                        <styles.Label>שם פרטי</styles.Label>
                        <styles.Input
                        type='text'
                        value={firstName}
                        onChange={(e) => handleFirstName(e.target.value)}
                        minLength={2}
                        maxLength={25}
                        />
                    </styles.SpaceInput>
                    <styles.SpaceInput>
                        <styles.Label>שם משפחה</styles.Label>
                        <styles.Input
                        type='text'
                        value={lastName}
                        onChange={(e) => handleLastName(e.target.value)}
                        minLength={2}
                        maxLength={20}
                        />
                    </styles.SpaceInput>
                    <styles.SpaceInput>
                        <styles.Label>מס' זהות</styles.Label>
                        <styles.LtrInput
                        type='text'
                        value={idNumber}
                        onChange={(e) => handleIdNumber(e.target.value)}
                        minLength={9}
                        maxLength={9}
                        />
                    </styles.SpaceInput>
                    <styles.SpaceInput>
                        <styles.Label>מס' טלפון</styles.Label>
                        <styles.LtrInput
                        type='tel'
                        value={phone}
                        onChange={(e) => handlePhoneNumber(e.target.value)}
                        minLength={isCellPhone ? 10 : 9}
                        maxLength={10}
                        />
                    </styles.SpaceInput>
                    <styles.SpaceInput>
                        <styles.Label>כתובת אימייל</styles.Label>
                        <styles.LtrInput
                        type='email'
                        value={email}
                        onChange={(e) => handleEmailAddress(e.target.value)}
                        maxLength={50}
                        />
                    </styles.SpaceInput>
                    {!isConnect &&
                    <><styles.PasswordSpaceInput>
                            <styles.Label>סיסמה</styles.Label>
                            <styles.LtrInput
                                type={passwordVisible ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => handlePassword(e.target.value)}
                                minLength={8}
                                maxLength={12}
                                onFocus={handlerPopupFocus}
                                onBlur={handlerPopupBlur}
                                />
                            {popupVisible &&
                            <styles.Popup>בחר סיסמה חזקה באורך 8 - 12 תווים</styles.Popup>}
                            {passwordVisible ?
                                <styles.FaEyeDiv onClick={() => setPasswordVisible(!passwordVisible)} />
                                : <styles.FaEyeSlashDiv onClick={() => setPasswordVisible(!passwordVisible)} />}
                        </styles.PasswordSpaceInput>
                        <styles.PasswordSpaceInput>
                                <styles.Label>אימות סיסמה</styles.Label>
                                <styles.LtrInput
                                    type={passwordVisibleVerification ? 'text' : 'password'}
                                    value={verificationPassword}
                                    onChange={(e) => handleVerificationPassword(e.target.value)}
                                    minLength={8}
                                    maxLength={12} 
                                    />
                                {passwordVisibleVerification ?
                                    <styles.FaEyeDiv onClick={() => setPasswordVisibleVerification(!passwordVisibleVerification)} />
                                    : <styles.FaEyeSlashDiv onClick={() => setPasswordVisibleVerification(!passwordVisibleVerification)} />}
                        </styles.PasswordSpaceInput></>
                    }
                    <styles.SabmitButton
                    type='submit'
                    >{isConnect ? 'עדכן פרטים' : 'צור חשבון'}</styles.SabmitButton>
                    {disabled &&
                    <styles.ErrorText>{disabled}</styles.ErrorText>
                    }
                </styles.FormSpecific>
            </styles.InnerContainer>
        </styles.Container>
    )
};

export default RegisterCustomer;