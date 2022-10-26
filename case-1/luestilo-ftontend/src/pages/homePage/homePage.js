import React from "react";
import Footer from "../../components/footer/Footer";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as C from './styled'
import { GlobalStyle } from "../../Global/GlobalStyle";
import pesquisarImg from "../../assets/pesquisarImg.png"
import { goProductDetail } from "../../router/coordinator";
import { useEffect } from "react";
import { useState } from "react";
import { ApiService } from "../../api/api";


const HomePage = () => {
   const navigate = useNavigate()
   const [searchParams, setSearchParams] = useSearchParams();

   const [store, setStore] = useState({});

   const [categories, setCategories] = useState([]);
   const [filteredCategories, setFilteredCategories] = useState([]);

   const [busca, setBusca] = useState('');

   useEffect(() => {
      const slug = searchParams.get('store');
      ApiService.getStoreData(slug)
         .then(res => {
            setStore(res.data)
         });
      ApiService.getStoreProducts(slug)
         .then(res => {
            setCategories(res.data)
            setFilteredCategories(res.data);
         });
   }, [])

   const handleBusca = (event) => {
      const value = event.target.value;
      setBusca(value);
      const filtered = categories.map(item => {
         return {
            ...item,
            products: item.products.filter(item => {
               return item.short_description.indexOf(value) != -1;
            })
         }
      })
      setFilteredCategories(filtered)
   }

   return (
      <C.FatherOflAl>
         <GlobalStyle />
         <C.Header>
            <C.ImgHeader src={store.banner}></C.ImgHeader>
         </C.Header>
         <C.FatherToSeek>
            <C.DivSeek >
               <C.VectorSeek src={pesquisarImg} id="btnBusca" alt="Buscar" />
               <C.TextSeek type="text" placeholder="Digite a busca aqui" value={busca} onChange={handleBusca} />

            </C.DivSeek>
         </C.FatherToSeek>
         <div>
            {filteredCategories.map((item, index) => (
               <div key={index}>
                  <C.TypeProduct>{item.description}</C.TypeProduct>
                  <C.FatherOfCards>
                     {item.products.map((item, index) => (
                        <C.CardProduct key={index} onClick={() => goProductDetail(navigate, item.id)}>
                           <C.ImgProduct src={item.images[0].image} />
                           <C.ProductPriceName>{item.short_description}</C.ProductPriceName>
                           <C.ProductPriceName>{`R$ ${item.stocks[0].unit_price},00`}</C.ProductPriceName>
                        </C.CardProduct>
                     ))}
                  </C.FatherOfCards>
               </div>
            ))}
         </div>
         <Footer />
      </C.FatherOflAl>

   )
}

export default HomePage