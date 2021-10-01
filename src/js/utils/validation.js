export function validateData(data) {
    if (typeof data === "object" && !Array.isArray(data)) {
        if (Object.keys(data).length > 0) {
            return true;
        }
    }
    return false;
}


export function validateCredentials(credentials) {
    try {
        const {user, password} = credentials;

        const validUser = validateUser(user);
        return (validUser);
    } catch (ex) {
        return false;
    }
}

function validateUser(user) {
    return typeof user === "string" && user.trim() !== "";
}