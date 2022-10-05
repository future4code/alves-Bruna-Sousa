 import {BrowserRouter, Router, Routes} from 'react-router-dom'
import Cart from '../pages/Cart/Cart'
import CheckoutEntrega from '../pages/checkout/checkoutEntrega/checkoutEntrega'
import CheckoutPagamento from '../pages/checkout/checkoutPagamento/checkoutPagamento'
import HomePage from '../pages/homePage/hoomePage'
import Login from '../pages/Login/login'
import LogoTipo from '../pages/logotipo/logoTipo'
import NewAccount1 from '../pages/newAccount/newAccount1'
import NewAccount2 from '../pages/newAccount/newAccount2'
import NewAccount3 from '../pages/newAccount/newAccount3'
import ProductDetail from '../pages/productDetail/productDetail'
import RegistrationOrLogin from '../pages/registrantionOrLogin/registrationOrLogin'

 const Router = () => {
    return(
        <BrowserRouter>
           <Routes>
            <Router index element ={<LogoTipo/>} />
            <Router path='/homePage' element ={<HomePage/>} />
            <Router path='/productDetail' element ={<ProductDetail/>} />
            <Router path='/cart' element ={<Cart/>} />
            <Router path='/regisrationOrLogin' element ={<RegistrationOrLogin/>} />
            <Router path='/login' element ={<Login/>} />
            <Router path='/newAccount1' element ={<NewAccount1/>} />
            <Router path='/newAccount2' element ={<NewAccount2/>} />
            <Router path='/newAccount3' element ={<NewAccount3/>} />
            <Router path='/checkoutEntrga' element ={<CheckoutEntrega/>} />
            <Router path='/checkoutPagamento' element ={<CheckoutPagamento/>} />                     
           </Routes>

        </BrowserRouter>

    )

 }
 export default Router