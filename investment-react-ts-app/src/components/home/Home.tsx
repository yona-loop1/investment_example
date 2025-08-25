import { Link } from 'react-router-dom';
import * as styles from './home.styles'
import useHome from '../../hooks/useHome';


const Home: React.FC = () => {
    const {
        inputRef,
        selectedFile,
        disabled,
        visibleUploadFile,
        handleInputExcel,
        submitCsvFile,
        resetUploadFile,
        setVisibleUploadFile
    } = useHome();

    return(
        <styles.Container>
            <styles.WelcomeArea>
                <styles.WelcomeMediumText>בסייעתא דשמיא</styles.WelcomeMediumText>
                <styles.WelcomeTitle>ברוך הבא</styles.WelcomeTitle>
                <styles.WelcomeSmallText>אצלנו תקבל ייעוץ וליווי לבניית תיק השקעות <br/>בהתאמה אישית ואינדיבידואלית לצרכיך ולמצבך הכלכלי</styles.WelcomeSmallText>
                <Link to={'/register'}>
                    <styles.WelcomeButton><h3>הירשם כאן</h3></styles.WelcomeButton>
                </Link>
                <styles.WelcomeText>לקוח קיים?</styles.WelcomeText>
                <Link to={'/connect'}>
                    <styles.WelcomeMediumText>היכנס לאזור האישי</styles.WelcomeMediumText>
                </Link>
                <styles.Space/>
                <styles.WelcomeButton
                onClick={() => setVisibleUploadFile(!visibleUploadFile)}
                >לחץ כאן כדי להעלות קבצים</styles.WelcomeButton>
                {visibleUploadFile &&
                <><button
                    onClick={() => resetUploadFile()}
                >מחק קובץ</button>
                    <form
                    onSubmit={submitCsvFile}
                    >
                        <styles.Excel
                            type='file'
                            accept='.xlsx'
                            onChange={handleInputExcel}
                            disabled={selectedFile}
                            ref={inputRef} 
                        />
                        <styles.WelcomeButton
                            type='submit'
                            disabled={disabled}
                        >שלח קובץ</styles.WelcomeButton>
                    </form></>
                }
            </styles.WelcomeArea>
        </styles.Container>
    )
};

export default Home;