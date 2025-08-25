import fetchToServer, { BASE_URL } from "./fetchService";


const questionnaireService = async (data: any) => {
    const url = BASE_URL + '/prepareInvestmentPortfolio'
    const options: RequestInit = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data)
    };

    return await fetchToServer(url, options)
};

export { questionnaireService };