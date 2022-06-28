import Cookies from "js-Cookies"

const TokenKey = "vue admin template zs token"


export function getToken() {
    return Cookies.get(TokenKey)
}
export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

// 存验证token信息