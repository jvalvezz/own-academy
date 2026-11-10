const ACCESS_TOKEN_KEY = 'own_academy_access_token'

export function saveAccessToken(token, rememberMe) {
    const storage = rememberMe ? localStorage : sessionStorage
    const otherStorage = rememberMe ? sessionStorage : localStorage

    otherStorage.removeItem(ACCESS_TOKEN_KEY)
    storage.setItem(ACCESS_TOKEN_KEY, token)
}

export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
        || sessionStorage.getItem(ACCESS_TOKEN_KEY)
}

export function removeAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    sessionStorage.removeItem(ACCESS_TOKEN_KEY)
}

export function isAuthenticated() {
    return Boolean(getAccessToken())
}
