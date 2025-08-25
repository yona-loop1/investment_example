import { useLocation, useNavigate } from "react-router-dom";


const useTopBar = () => {
    const id = sessionStorage.getItem('id')
    const logged = Boolean(id)
    const location = useLocation();
    const navigae = useNavigate()
    
    function logOut() {
        navigae('/connect')
        sessionStorage.clear()
        window.location.reload()
    }
    
    return {
        logged,
        location,
        logOut
    }
};

export default useTopBar;