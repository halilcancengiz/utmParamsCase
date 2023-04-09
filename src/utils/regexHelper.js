export const emailRegexp = (email) => {
    const regex = /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regex.test(email)) {
        return true
    } else {
        return false
    }
}