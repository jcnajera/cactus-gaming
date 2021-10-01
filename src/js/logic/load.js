import getCactusGamingApi from "api/cactusGaming";
import { getCactusGamingRequest } from "utils/requests/request";

async function load(params) {
    const { callback } = params
    
    try {
        const request = getCactusGamingRequest();
        const cactusGamingResponse = await getCactusGamingApi(request);

        callback({
            success: false,
            errorType: 2
        });
    } catch (ex) {
        callback({
            success: false,
            errorType: 1
        });
    }
}

export default load;
