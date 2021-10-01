import getCactusGamingApi from "api/cactusGaming";
import { getCactusGamingRequest } from "utils/requests/request";
import { validateData, validateCredentials } from "utils/validation";

async function load(params) {
    const { callback } = params

    const response = {
        success: false,
        errorType: 1,
        data: null,
    };
    
    try {
        const request = getCactusGamingRequest();
        const cactusGamingResponse = await getCactusGamingApi(request);
        
        const { data } = cactusGamingResponse;
        
        const validData = validateData(data);
        if (!validData) {
            callback(response);
            return null;
        }
        
        const validUser = validateCredentials(data.credenciales);
        if (!validUser) {
            response.errorType = 2;
            callback(response);
            return null;
        }

        response.success = true;
        response.data = data;
        response.errorType = -1; 
        callback(response);
    } catch (ex) {
        callback({
            success: false,
            errorType: 1
        });
    }
}

export default load;
