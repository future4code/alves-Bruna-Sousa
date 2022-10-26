import styled from "styled-components";


export const ContainerLogin = styled.main`
margin-left: 10px;
margin-right: 10px;
margin-top: 10px;
`
export const H1 = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 36px;
/* or 112% */
margin-left: 10px;
letter-spacing: 0.01em;
margin-top: 30px;


/* white/elements-bg */

color: #FFFFFF;
@media screen and (min-device-width : 1200px) {
text-align: center;
}
`
export const H2 = styled.h2`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
/* or 171% */
margin-left: 10px;
letter-spacing: 0.0075em;

/* white/elements-bg */

color: #FFFFFF;
@media screen and (min-device-width : 1200px) {
text-align: center;
}
`
export const Cards = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 30px;
margin-top: 40px;
`
export const Card = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
margin-top: 20px;
width: 100vw;
@media screen and (min-device-width : 1200px) {
width: 400px;
align-items: center;
}
`
export const NamePhonePassword = styled.label`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
color: #ffff;
margin-bottom:5px ;
margin-left: 10px;
`

export const InputPhonePassword = styled.input`
width: 90vw;
height: 28px;
margin-left: 15px;
margin-left: 15px;
@media screen and (min-device-width : 1200px) {
width: 400px;
}
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
export const Button1 = styled.button`
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

background: rgb(88, 101, 129);
border-radius: 4px;
`