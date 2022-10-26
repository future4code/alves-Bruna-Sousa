import React, { useEffect, useState } from "react";
import { GlobalStyle } from "../../Global/GlobalStyle";
import lixo from "../../assets/lixo.png"
import { Cards, ImgProduct, Title, Screen, Product, Pryce, Units, CardFather, Linha, Information, InfoLeft, InfoRight, TextInfo, ValueInfo, Button2, FatherButton } from "./styled";
import Footer from "../../components/footer/Footer";
import { goRegisrationOrLogin } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { ApiService } from "../../api/api";


const Cart = () => {

    const [listCart, setListCart] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const storeCart = localStorage.getItem('cart');
        if (storeCart){
            const ids = JSON.parse(storeCart);
            setListCart(ids);
            ApiService.getProductsDetail(ids)
            .then(res=>{
                const apiProducts = res.data;

                const newProducts = listCart.map(item=>{
                    console.log(item)
                    return getCartitem(item, apiProducts)
                });
                setProducts(newProducts);
            })
        }
    },[])

    const getCartitem = (id, array) =>{
        return array.find(item=>item.id === id)
    }
    console.log(products)
    const navigate = useNavigate()

    return (
        <Screen>
            <GlobalStyle />
            <Title>Carrinho</Title>
            <CardFather>
                
                {newProducts.map((item, index)=>{


                    return (<Cards key={index}>
                        <div>
                            <ImgProduct src={item.images[0].image} />
                        </div>
                        <div>
                            <Product>{item.short_description}</Product>
                            <Pryce>{`R$ ${item.stocks[0].unit_price},00`}</Pryce>
                            <Units>unidade</Units>
                        </div>
                        <div>
                            <img src={lixo} />
                        </div>
                    </Cards>)
                }
                )}
                

            </CardFather>
            <Linha />
            <TextInfo>Resumo da compra</TextInfo>
            <Information>
                <InfoLeft>
                    <TextInfo>Subtotal</TextInfo>
                    <TextInfo>Valor da entrega</TextInfo>
                    <ValueInfo>Valor Total</ValueInfo>
                </InfoLeft>
                <InfoRight>
                    <TextInfo>{`R$ ${products.reduce((acum,item)=> acum+item.stocks[0].unit_price,0)},00`}</TextInfo>
                    <TextInfo>Entrega grátis</TextInfo>
                    <ValueInfo>{`R$ ${products.reduce((acum,item)=> acum+item.stocks[0].unit_price,0)},00`}</ValueInfo>
                </InfoRight>
            </Information>
            <FatherButton>
                <Button2 onClick={() => goRegisrationOrLogin(navigate)}>Finalizar compra</Button2>
            </FatherButton>
            <Footer />

        </Screen>
    )
}

export default Cart