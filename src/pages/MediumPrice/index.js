import React, {useState, useEffect} from 'react';

import {InputComponent} from '../../components/InputComponent/index'
import {ResultCard} from '../../components/ResultCard/index'
import { useMediumPrice } from '../../contexts/MediumPriceContext/index';

import './styles.css';


export const MediumPrice = () => { 

    let html = '<thead><tr><td>Quantidade</td><td>Preço</td></tr></thead>';
    
    const [htmlTable, setHtmlTable] = useState('');

    const { 
            quantity, 
            setQuantity, 
            price, 
            setPrice, 
            mediumPrice, 
            setMediumPrice, 
            sumAll, 
            setSum,
            list,
            setList
        } = useMediumPrice();
      

    const handleAdd = () => {

        if (!price || !quantity) {alert("Preencha corretamente os campos!");return;}

        let oldSum = parseInt(sumAll);
        let oldMediumPrice = mediumPrice;

        let addedPrice = price;
        let addedQuantity = parseInt(quantity);

        let newMediumPrice = ((parseInt(oldSum) * oldMediumPrice)+(parseInt(addedQuantity) * addedPrice)) / (parseInt(quantity) + parseInt(oldSum))
        let newQuantity = (parseInt(quantity) + parseInt(oldSum))
        
        setMediumPrice(newMediumPrice.toFixed(8));
        setSum(parseInt(newQuantity));

        let newlist = list;
        newlist.push([addedQuantity, parseFloat(addedPrice).toFixed(8)]); 
        
        setList(newlist);

        createListTable();

        setPrice('');
        setQuantity('');

    }  

    const createListTable = () => {

        if (list.length == 0) { 
            return;
        } else {
            list.map( (value) => {
                html = html +  `
                    <tr>
                        <td>${value[0]}</td>
                        <td>$ ${value[1]}</td>
                    </tr>
                
                `
            } )
        }        

        setHtmlTable(html);
    }

    


    
    return (
        <>
            <div className="title">Calcula Preço Médio</div>

            <div className="container">
                

                <div className="result">
                    <ResultCard
                        text1="Seu Preço Médio atual é:"
                        text2={`$ ${mediumPrice}`}
                    />  

                    <ResultCard
                        text1="Quantidade de ações:"
                        text2={sumAll}
                    />                  
                    
                </div>

                <div className='middle'>


                    <div className="equation">

                        <h2>Fórmula:</h2>                        

                        <math>
                            <mi> PM </mi>
                            <mo> = </mo>
                            <mfrac>
                                    <mrow>
                                        <mn> (Qa x Pa) </mn>
                                        <mo> + </mo>
                                        <mn> (Qa x Pa)   </mn>
                                        <mo> + </mo>
                                        <mn> (Qn x Pn)   </mn>
                                    </mrow>
                                    <mn>Total Ações</mn>
                            </mfrac>                        
                        </math>

                        <div className="equationDescription">
                            <div><b>Qa:</b> quantidade de ações</div>
                            <div><b>Pa:</b> preço de cada ação</div>
                        </div>

                    </div> 

                    <table className='tableList' dangerouslySetInnerHTML={{ __html: htmlTable }} />
                </div>

                <h3>Digite os valores:</h3>

                <div className="calculate">
                    <InputComponent
                        type="number"                
                        text="Quantidade"
                        min="0"
                        state="setQuantity"
                    /> 

      
                    <InputComponent
                        type="number"                
                        text="Preço"
                        min="0" 
                        state="setPrice"
                    />    

                </div>
                <div className="btnAdd" onClick={handleAdd}>Adicionar</div>                

            </div>
        </>            

    )

}