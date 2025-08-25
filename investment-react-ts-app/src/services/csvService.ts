import fetchToServer, { BASE_URL } from "./fetchService";


const csvService = async (data: any) => {
    const formData = new FormData();
    formData.append('file', new Blob([data], { type: 'text/csv' }), 'file.csv');

    const url = BASE_URL + '/uploadCsv'
    const options: RequestInit = {
        method: "POST",
        headers: undefined,
        body: formData
    };

    return await fetchToServer(url, options)
};

export default csvService;