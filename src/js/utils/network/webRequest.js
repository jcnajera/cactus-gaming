import axios from "axios";

export function makeAxiosRequest(request) {
    return axios(request)
        .then((response) => response)
        .catch((error) => {
            if (axios.isCancel(error)) {
                throw "canceled";
            } else if (error.response) {
                return error.response;
            }
            throw "network error";
        });
}
