export const URL_API = 'https://dogsapi.origamid.dev/json/';

export const POST_TOKEN = ({ username, password }) => {
    return {
        url: URL_API + 'jwt-auth/v1/token',
        options: {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({ username, password }),
        }
    }
}

export const TOKEN_VALIDATE_POST = (token) => {
    return {
        url: URL_API + 'jwt-auth/v1/token/validate',
        options: {
            method: 'POST',
            headers: { Authorization: 'Bearer ' + token, },
        }
    }
}

export const GET_USER = (token) => {
    return {
        url: URL_API + 'api/user',
        options: {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + token, },
        }
    }
}