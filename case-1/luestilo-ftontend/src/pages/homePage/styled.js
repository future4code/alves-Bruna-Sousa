import styled, { createGlobalStyle } from "styled-components"
import homeBaner from "../../assets/home-baner.png"
import cafeDesktop from "../../assets/cafeDesktop.jpeg"




export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: white;
  }`

export const FatherOflAl = styled.div `
display: grid;
grid-template-rows: 224px 50px 1fr 60px;
`
export const Header = styled.header`
width: 100vw;
height: 200px;   
margin: 0px 0px 24px 0px;
  background: url(${cafeDesktop});   

`
 export const ImgHeader = styled.img`
 width: 100%;
 height: 200px;
 `


 export const FatherToSeek = styled.div`
 display: grid;
 justify-content: center;
 width: 100%;
 `
 export const DivSeek = styled.div`
 display: grid;
 justify-content: center;
  align-items: center;
  grid-template-columns: 15% 80%;
  width: 80vw;

  height: 56px;
background: #FFFFFF;
border-radius: 8px;
flex: none;
order: 0;
flex-grow: 0;
  @media screen and (min-device-width : 280px) and (max-device-width : 400px) {
  width: 276px;

}
 `
 export const TextSeek = styled.input`
   float:left;
  background-color:transparent;
  padding-left:5px;
  font-style:italic;
  font-size:16px;
  border:none;
  height:32px;
  width:260px;
    outline:none;
    box-shadow: none;
  
  
  @media screen and (min-device-width : 280px) and (max-device-width : 480px) {
  width: 70%;

}
 `

 export const VectorSeek = styled.img`
 position: relative;
 align-items: center;
 text-align: center;
 justify-content: center;
 width: 15px;
 right: 0%;
 margin-right: 5px;

`

export const FatherOfCards = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  overflow-x: auto;
  width: 100vw;
`

export const ImgProduct = styled.img`
width: 180px;
height: 180px;
margin-bottom: 0%;
`

export const CardProduct = styled.div`
margin-left: 10px;
&:hover{
        background: #072440;
    }
width: 180px ;
`

export const TypeProduct = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
color: white;
margin-top: 10px;
margin-bottom: 8px;
margin-left: 10px;
`
export const ProductPriceName = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 28px;
color: #FFFFFF;
width: 180px;
height: 28px;
margin-top: 0%;
margin-bottom: 0%;
`
