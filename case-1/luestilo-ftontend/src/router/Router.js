 import React from 'react'
 import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from '../pages/Cart/Cart'
import CheckoutPagamento from '../pages/checkoutPagamento/checkoutPagamento'
import HomePage from '../pages/homePage/homePage'
import Login from '../pages/Login/login'
import LogoTipo from '../pages/logoTipo/logoTipo'
import NewAccount1 from '../pages/newAccount/newAccount1'
import NewAccount2 from '../pages/newAccount/newAccount2'
import NewAccount3 from '../pages/newAccount/newAccount3'
import ProductDetail from '../pages/productDetail/productDetail'
import RegistrationOrLogin from '../pages/registrantionOrLogin/registrationOrLogin'

 const Router = () => {
    return(
        <BrowserRouter>
           <Routes>
            <Route index element ={<LogoTipo/>} />
            <Route path='/homePage' element ={<HomePage/>} />
            <Route path='/productDetail' element ={<ProductDetail/>} />
            <Route path='/regisrationOrLogin' element ={<RegistrationOrLogin/>} />
            <Route path='/cart' element ={<Cart/>} />
            <Route path='/login' element ={<Login/>} />
            <Route path='/newAccount1/' element ={<NewAccount1/>} />
            <Route path='/newAccount2' element ={<NewAccount2/>} />
            <Route path='/newAccount3' element ={<NewAccount3/>} />
            <Route path='/checkoutPagamento' element ={<CheckoutPagamento/>} />                     
           </Routes>

        </BrowserRouter>

    )

 }
 export default Router