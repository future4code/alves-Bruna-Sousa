import styled from "styled-components"

export const PaiDeTodos = styled.div`
display: grid;
box-sizing: border-box;
grid-template-rows: 1fr;
align-items: center;
justify-content: center;

`
export const Logo = styled.img`
width:  250px;
margin-top: 48px;
align-items: center;
text-align: center;
@media screen and (min-device-width : 280px) and (max-device-width : 480px) {
  width: 128px;

}
`
export const DivLogo = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`

export const DivTitulo = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: white;
text-align: center;

`
export const DivSubtitulo = styled.div`
display: grid;
align-items: center;
justify-content: center;
text-align: center;
justify-items: center;
width: auto;
`
export const Subtitulo = styled.h2`
width: 80%;
font-size: 16px;
font-style: normal;
color: #F2F2F2;
align-items: center;
text-align: center;
@media screen and (min-device-width : 280px) and (max-device-width : 480px) {
font-size: 4vw;

}
`
export const PaiDeContainer = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
`
export const CardLojas = styled.button`
display: grid;
width: 400px;
cursor: pointer;
background: #FFFFFF;
height: 90px;
align-items: center;
text-align: center;
justify-content: center;
border-radius: 8px;
grid-template-columns:15% 1fr 15%;
:hover { background: #e2e2e2; }
@media screen and (min-device-width : 280px) and (max-device-width : 480px) {
  width: 90%;
  height: 76px;
}
` 
export const ImgLocalizador = styled.img`
align-items: center;
text-align: center;
width: 50%;
@media screen and (min-device-width : 280px) and (max-device-width : 480px) {
width: 20%;
}
`
export const TextCard = styled.div`
text-align: left;
` 
export const NomeLoja = styled.h3`
margin-bottom: 0%;
`
export const LocalLoja = styled.p`
margin-top: 3px;
`