import axios from "axios";

const baseURL = "http://localhost:3333/api/v1/"

const request = async (method, url, body = {}) => {
    try {
        if (method == 'POST') {
            const { data, error } = await axios.post(`${baseURL + url}`, body);
            return ({
                data,
                error,
            });
        }

        if (method == 'GET') {
            const { data, error } = await axios.get(`${baseURL + url}`);
            return ({
                data,
                error,
            });
        }

        if (method == 'PUT') {
            const { data, error } = await axios.put(`${baseURL + url}`, body);
            return ({
                data,
                error,
            });
        }

        if (method == 'DELETE') {
            const { data, error } = await axios.delete(`${baseURL + url}`);
            return ({
                data,
                error,
            });
        }
    } catch (error) {
        return ({
            error,
            data: false
        });
    }
};

export default request;
