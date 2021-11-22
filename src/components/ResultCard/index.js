import React from 'react';

import './styles.css'

export const ResultCard = (props) => {

    return (
        <div className="divCard">
            <div className="labelCard">
                {props.text1}               
            </div>
            <div className="resultElement">
                {props.text2}               
            </div>
        </div>
        
    )

}