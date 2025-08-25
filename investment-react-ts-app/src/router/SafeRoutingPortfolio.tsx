import { Navigate } from "react-router-dom";
import { Prop } from "./SafeRoutingAnonymise";


const SafeRoutingPortfolio = ( child: Prop ) => {
    const money = sessionStorage.getItem('money')
    const havePortfolio = Boolean(money)
    
    if (havePortfolio) {
        return child.children
    } else {
        window.alert('אין אפשרות להציג לך תיק השקעות לפני מילוי השאלון,\ עליך למלא את השאלון לפני כן')
        return <Navigate to={"/questionnaire"}/>
    }
};

export default SafeRoutingPortfolio;