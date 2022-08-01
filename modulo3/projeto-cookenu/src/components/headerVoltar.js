import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom'
import { PageLogin, VoltarPage } from "../routes/coordinator";
const Heaader = styled.header`
display: grid;
grid-template-columns: 50% 50%;
height: 60px;
background-color: #765c4b;
align-items: center;
`
const Section1 = styled.section`
margin-left: 10px;

`
const Section2 = styled.section`
text-align: right;
margin-right: 10px;
`
const Button1 = styled.button`
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;  
    font-size: 20px;
    color: white;

`
const Button2 = styled.button`
    background-color: black;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
    border: white;
    cursor:pointer;
    font-size: 15px;
    color: white;
    padding: 10px;
`


const HeaderVoltar = () => {
    const params = useParams();
    const navigate = useNavigate();
    return(
        <Heaader>
            <Section1>
                <Button1 onClick={()=> PageLogin (navigate)}>Cookenu</Button1>
            </Section1>
            <Section2>
                <Button2 onClick={() => VoltarPage (navigate)}>Voltar</Button2>
            </Section2>
        </Heaader>
        
    )
}
export default HeaderVoltar