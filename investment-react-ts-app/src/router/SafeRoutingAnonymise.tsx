import { Navigate } from "react-router-dom";


export interface Prop {
    children: any; 
};

const SafeRoutingAnonymise = (child: Prop) => {
    const id = sessionStorage.getItem('id');
    const logged = Boolean(id)

    if (!logged) {
        return child.children
    } else {
        return <Navigate to={"/home"}/>
    }
};

export default SafeRoutingAnonymise;