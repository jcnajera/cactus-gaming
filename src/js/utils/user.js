export function validateData(data) {
    if (typeof data === "object" && !Array.isArray(data)) {
        if (Object.keys(data).length > 0) {
            return true;
        }
    }
    return false;
}

export function validateUser(credentials) {
    try {
        const {user, password} = credentials;

        const validUser = typeof user === "string" && user.trim() !== "";
        return (validUser);
    } catch (ex) {
        throw "User Invalid"
    }
}