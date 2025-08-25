import useLogin from '../../hooks/useLogin';
import * as styles from './Login.styles';


const Login: React.FC = () => {
    const {
        idNumber,
        disabled,
        password,
        passwordVisible,
        setPasswordVisible,
        handlePassword,
        handleIdNumber,
        send
    } = useLogin();
    
    return( 
        <styles.Container>
            <styles.InnerContainer 
            onSubmit={send}>
                <styles.Title>מספר זהות</styles.Title>
                    <styles.Input
                    type='text'
                    value={idNumber}
                    onChange={(e) => handleIdNumber(e.target.value)}
                    minLength={9}
                    maxLength={9}
                    />
                <styles.PasswordSpaceInput>
                <styles.Title>סיסמה</styles.Title>
                    <styles.LtrInput
                        type={passwordVisible ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => handlePassword(e.target.value)}
                        minLength={8}
                        maxLength={12} 
                        />
                    {passwordVisible ?
                    <styles.FaEyeDiv onClick={() => setPasswordVisible(!passwordVisible)} />
                    : <styles.FaEyeSlashDiv onClick={() => setPasswordVisible(!passwordVisible)} />}                    
                </styles.PasswordSpaceInput>
                <styles.Button
                type='submit'
                >התחבר</styles.Button>
                {disabled &&
                <styles.ErrorText>{disabled}</styles.ErrorText>
                }
            </styles.InnerContainer>
        </styles.Container>
    )
};

export default Login;