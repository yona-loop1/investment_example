import { RegisterDetails } from "../hooks/useRegisterCustomer";
import fetchToServer, { BASE_URL } from "./fetchService";


const registerNewCustomerService = async (data: RegisterDetails, connection: boolean) => {
    let url = ''
    if (connection) {
        url = BASE_URL + '/updateMetaCustomer'
    } else {
        url = BASE_URL + '/registerCustomer'
    };
    
    const options: RequestInit = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data)
    };

    return await fetchToServer(url, options)
};

export default registerNewCustomerService;
