import { Link } from 'react-router-dom';
import * as styles from './topBar.styles'
import useTopBar from '../../hooks/useTopBar';


interface TopBarProps {
    userName: string
};

const TopBar: React.FC<TopBarProps> = ({ userName }) => {
    const {
        logged,
        location,
        logOut
    } = useTopBar();    

    return (
        <styles.Container>
            { logged && <styles.SignIn
                logged={logged}
                onClick={logOut}
                >התנתק</styles.SignIn>
            }
            <styles.Navigation
                logged={logged}>
                { !logged &&
                    <Link to={'/connect'}><styles.SignIn
                    logged={logged}
                    isConnected={location.pathname === '/connect'}
                    >התחבר</styles.SignIn></Link>
                }
                <Link to={'/home'}><styles.Home
                logged={logged}
                isConnected={location.pathname === '/home' || location.pathname === '/'}
                >דף הבית</styles.Home></Link>
                <Link to={'/questionnaire'}><styles.Text
                isConnected={location.pathname === '/questionnaire'}
                >שאלון אפיון</styles.Text></Link>
                <Link to={'/investmentPortfolio'}><styles.Text
                isConnected={location.pathname === '/investmentPortfolio'}
                >הרכב תיק ההשקעות</styles.Text></Link>
            </styles.Navigation>
            <styles.UserName>{userName}</styles.UserName>
            {/* <styles.Text/> */}
        </styles.Container>
    );
};

export default TopBar;