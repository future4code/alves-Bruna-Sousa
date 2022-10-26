import React from "react";
import Slider from 'react-styled-carousel';

export default function SlideProdutos ({images})  {
    
    return(
        <Slider cardsToShow={1}>
            {/* {images.map((item, index)=>(
                <img src={item.image} key={index} />
            ))} */}
        </Slider>
    ) 
}

