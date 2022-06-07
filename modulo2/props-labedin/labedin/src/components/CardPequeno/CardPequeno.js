import React from 'react';
import './CardPequeno.css';
 

function CardPequeno(props) {
    return (
        <div className="container-pequeno">
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardPequeno;



