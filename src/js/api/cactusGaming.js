import {makeAxiosRequest} from "utils/network/webRequest";

async function getCactusGamingApi(request) {
    const response = {
        success: false,
        data: null,
    };

    try {
        const webResponse = await makeAxiosRequest(request);

        const {status} = webResponse;

        if (status === 200) {
            response.success = true;
            response.data = data;

            return Promise.resolve(response);
        }
    } catch (ex) {}

    return Promise.reject(response);
}

export default getCactusGamingApi;
