import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ApiService } from "../../api/api";
import { GlobalStyle } from "../../Global/GlobalStyle";
import { goCart } from "../../router/coordinator";
import { Button, CardButton, Container, Div, Footer, H2, H3, ImgProducts, P, Pryce, PryceShare, Slides } from "./styled";
import Slider from 'react-styled-carousel';
import { ReactDOM } from "react";


const ProductDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [product, setProduct] = useState({});


  useEffect(() => {
    const id = searchParams.get('id');
    ApiService.getProductDetail(id)
      .then(res => {
        setProduct(res.data[0]);
      })
  }, [])

  const addToCart = (item) => {
    let cart = localStorage.getItem('cart')
    if(cart){
      cart = JSON.parse(cart);
    //  console.log(cart);
      cart.push(item)
      localStorage.setItem('cart',JSON.stringify(cart));
      return
    }
    localStorage.setItem('cart',JSON.stringify([item]));
  }



  const navigate = useNavigate()
  return (
    <Container>
      <GlobalStyle />
      <Slides>
        {product.images && <Slider cardsToShow={1}>
          {product.images.map((item, index) => (
            <ImgProducts src={item.image} key={index} />
          ))}
        </Slider>}
      </Slides>
      <div>
        <H2>{product.short_description}</H2>
      </div>
      <Div />
      <div>
        <H3>Descrição</H3>
        <P>{product.description}</P>
      </div>
      <Footer>
        <div>

        </div>
        <CardButton>
          <Button onClick={() => {
            addToCart(product.id)
            goCart(navigate)
          }}>COMPRAR</Button>
        </CardButton>
      </Footer>

    </Container>
  )
}

export default ProductDetail