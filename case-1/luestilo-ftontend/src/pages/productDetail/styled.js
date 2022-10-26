import styled from "styled-components"
export const Container = styled.div`
display: grid;
width: 100vw;
grid-template-columns: 300px ;

`
export const ImgProducts = styled.img`
width: 100vw;
height: 280px;
margin: 0;
`

export const Slides = styled.div`
width: 100vw;
`

export const H2 = styled.h2`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 36px;
color: #FFFFFF;
margin-left: 10px;
`
export const Div = styled.div`
width: 100vw;
height: 1px;
background: #343435;

`
export const H3 = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
margin-left: 10px;
color: rgba(255, 255, 255, 0.8);

`
export const P = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 28px;
color: #FFFFFF;
margin-left: 10px;
`
export const Footer = styled.footer`
display: grid;
bottom: 0;
width: 100vw;
position: fixed;
grid-template-columns: 70% 30%;
background: #E74845;
height: 100px;
padding: 0%;
`
export const Pryce = styled.h4`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 32px;
margin: 10px 2px 0;
margin-left: 10px;
color: #FFFFFF;
`
export const PryceShare = styled.p`
margin-left: 10px;
color: #FFFFFF;
`
export const Button = styled.button`
background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;  
    font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 28px;
text-align: right;
letter-spacing: 0.0075em;
color: #FFFFFF;
width:100% ;
text-align: center;
`
export const CardButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background-color: #a01f20;
`