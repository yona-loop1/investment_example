export const BASE_URL = "http://localhost:3000"

//export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";

export interface ServerResponse {
    data: any;
    error: any
}

const fetchToServer = async (url: string, options: RequestInit): Promise<any>=> {
    let res: ServerResponse = {
        data: null,
        error: null
    };

    try {
        const response = await fetch(url, options)
            if (!response.ok) {
                const errorDetails = await response.json();
                throw new Error(`HTTP error! Status: ${response.status}`) && window.alert(`HTTP error! Status: ${response.status}\n ${errorDetails.error}`);
            }
            res = await response.json();
            // console.log("res.data :", res.data , "res.error: ", res.error);
            // console.log("res.data[0] :", res.data[0]);
    } catch (error) {
        res.error = error as Error;
    }

    return res
};

export default fetchToServer;