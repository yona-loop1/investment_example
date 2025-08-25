import { Navigate } from "react-router-dom";
import { Prop } from "./SafeRoutingAnonymise";


const SafeRoutingQuestionnaire = ( child: Prop) => {
    const money = sessionStorage.getItem('money')
    const asked = Boolean(money)
    
    if (!asked) {
        return child.children
    } else {
        return <Navigate to={"/home"}/>
    }
};

export default SafeRoutingQuestionnaire;