import { ChangePassword } from "../hooks/useHomeCustomer";
import fetchToServer, { BASE_URL } from "./fetchService";


const changePasswordService = async (data: ChangePassword) => {
    const url = BASE_URL + '/changePassword'
    const options: RequestInit = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data)
    };

    return await fetchToServer(url, options)
};

export default changePasswordService;