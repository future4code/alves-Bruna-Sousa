import styled from 'styled-components'

export const MainDiv = styled.div`
    position: fixed;
    bottom:0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-top: 5px;
    height: 60px;
    width: 100%;
    border-top: solid grey 1px;
    background-color: white;

  //  @media(min-width: 500px) {
   // width: 400px;


 // }

    button{
        border: 0;
        background-color: transparent;
        justify-content: space-around;
        font-size: 12px;
        cursor:pointer;
    }
`
export const Text = styled.p`
font-size: 12px;
color: #c6c6c6;
margin-top: 0%;
`