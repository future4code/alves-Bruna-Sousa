import styled from "styled-components";


export const Screen = styled.main`

`
export const Title = styled.h1`
color: #ffff;
margin-left: 10px;
`
export const Cards = styled.div`
height: 110px;
display: grid;
grid-template-columns: 30% 55% 10%; 
width: 90vw;
align-items: center;
justify-content: center;
background-color: #ffff;
margin-bottom: 10px;

@media screen and (min-device-width : 1200px) {
width: 350px;
}
`
export const ImgProduct = styled.img`
width: 80%;
`
export const CardFather = styled.div`
  display: grid;
  width: 100vw;
  column-gap: 8px;
  align-items: center;
  justify-content: center;
  height: 250px;
  overflow-y: scroll;
`
export const Product = styled.h2`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
/* identical to box height, or 175% */
letter-spacing: 0.0075em;
/* infog2/primary-dark */
color: #263E80;
`
export const Pryce = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 14px;
/* identical to box height, or 171% */
letter-spacing: 0.0075em;
/* text/bodies */
color: #4E4B66;
`
export const Units = styled.h4`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
/* identical to box height, or 171% */
letter-spacing: 0.0075em;
/* text / labels */
color: #6E7191;
`
export const Linha = styled.div`
    border: 1px solid black;
    margin: 8px 16px 0px 16px;
    background-color: black;
`
export const Information = styled.div`
display: grid;
grid-template-columns:50% 50%;

`
export const InfoLeft = styled.div`
display: block;
float: left;
`
export const InfoRight = styled.div`
display: block;
float: right;
`
export const TextInfo = styled.h2`
margin-left: 10px;
width: 163px;
height: 28px;
/* body - medium - Semibold */
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 28px;
/* identical to box height, or 175% */
letter-spacing: 0.0075em;
/* White / 80% */
color: rgba(255, 255, 255, 0.8);
`
export const ValueInfo = styled.h3`
margin-left: 10px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 32px;
/* identical to box height, or 160% */

letter-spacing: 0.0075em;

/* White / 100% */

color: #FFFFFF;

`

export const Button2 = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;

width: 90vw;
height: 60px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
color: #ffff;

/* infog2/secondary-normal */

background: #E74845;
border-radius: 4px;
`
export const FatherButton = styled.div`
align-items: center;
justify-content: center;
display: grid;
  width: 100vw;
  column-gap: 8px;
  margin-bottom: 70px;

`
