import styled from "styled-components";

export const Title = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
line-height: 36px;
/* identical to box height, or 112% */

display: flex;
align-items: center;
letter-spacing: 0.01em;

/* White / 100% */

color: #FFFFFF;
margin-left: 10px;
`
export const InfoTitle = styled.h2`
font-family: 'Poppins';
font-style: normal;
font-size: 14px;
line-height: 24px;
/* identical to box height, or 171% */

display: flex;
align-items: center;
letter-spacing: 0.0075em;

/* White / 100% */

color: #FFFFFF;
margin-left: 10px;
`
export const SubTitle = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */

letter-spacing: 0.01em;

/* White / 100% */

color: #FFFFFF;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin-left: 10px;
`

export const Back = styled.img`
margin-left: 10px;
`
export const Button2 = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
cursor: pointer;
width: 90vw;
height: 60px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
color: #ffff;
margin-bottom: 10px;

/* infog2/secondary-normal */

background: #E74845;
border-radius: 4px;
`
export const Card = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
margin-top: 20px;
width: 100vw;
margin-bottom: 25px;
@media screen and (min-device-width : 1200px) {
width: 400px;
}
`
export const CardButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const Label = styled.label`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
color: #ffff;
margin-bottom:5px ;
margin-left: 10px;
`
export const Input  = styled.input`
width: 90vw;
height: 28px;
margin-left: 15px;
margin-left: 15px;
@media screen and (min-device-width : 1200px) {
width: 400px;
}
`