import { ToLogged } from "../hooks/useLogin";
import fetchToServer, { BASE_URL } from "./fetchService";


const loginService = async (data: ToLogged) => {
    const url = BASE_URL + '/login'
    const options: RequestInit = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data)
    };

    return await fetchToServer(url, options)
};

export default loginService;