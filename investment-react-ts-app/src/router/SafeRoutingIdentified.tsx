import { Navigate } from "react-router-dom";
import { Prop } from "./SafeRoutingAnonymise";


const SafeRoutingIdentified = ( child: Prop) => {
    const id = sessionStorage.getItem('id')
    const logged = Boolean(id)

    if (logged) {
        return child.children
    } else {
        return <Navigate to={"/connect"}/>
    }
};

export default SafeRoutingIdentified;