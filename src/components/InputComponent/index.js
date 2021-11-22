import React, {useState} from 'react';

import './styles.css'

import { useMediumPrice } from '../../contexts/MediumPriceContext/index';


export const InputComponent = (props) => {

    const { 
        quantity, 
        setQuantity, 
        price, 
        setPrice,      
    } = useMediumPrice();

    const handleInput = (event) => {
        if (props.state === 'setPrice') {  setPrice(event.target.value) }
        if (props.state === 'setQuantity') { setQuantity(event.target.value) }

    }

    return (
        <div className="divInput">
            <div className="labelInput">
                {props.text}               
            </div>
            <input 
                    className="inputElement" 
                    type={props.type}
                    autoFocus={props.autoFocus || false}   
                    min={props.min || 0 }                    
                    onChange={(value) => { handleInput(value) } }
                    value={props.state === 'setPrice' ? price : quantity}                                    
            />
        </div>
        
    )

}