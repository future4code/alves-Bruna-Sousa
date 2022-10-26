import { contextStore } from "../api/api"

export const goBack = (navigate) => {
    navigate(-1)
}
export const goHomePage = (navigate) => {
    navigate('/homePage' + '?store='+contextStore.value)
}
export const goCart = (navigate) => {
    navigate('/cart')
}
export const goProductDetail = (navigate, id='') => {
    navigate(`/productDetail?id=${id}`)
}
export const goRegisrationOrLogin = (navigate) => {
    navigate('/regisrationOrLogin')
}
export const goLogin = (navigate) => {
    navigate('/login')
}
export const goNewAccount1 = (navigate) => {
    navigate('/newAccount1')
}
export const goNewAccount2 = (navigate) => {
    navigate('/newAccount2')
}
export const goNewAccount3 = (navigate) => {
    navigate('/newAccount3')
}

export const goCheckoutPagamento = (navigate) => {
    navigate('/checkoutPagamento')
}

