import React, {createContext, useState, useContext}  from "react";

const MediumPriceContext = createContext();

export default function MediumPriceProvider({ children }) {

    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [mediumPrice, setMediumPrice] = useState(0);
    const [sumAll, setSum] = useState(0);
    const [list, setList] = useState([]);

    return (

        <MediumPriceContext.Provider
            value={
                {   quantity, 
                    setQuantity, 
                    price, 
                    setPrice, 
                    mediumPrice, 
                    setMediumPrice, 
                    sumAll, 
                    setSum,
                    list,
                    setList
                }
            }
        >

            {children}

        </MediumPriceContext.Provider>

    );
};

export function useMediumPrice() {
    const context = useContext(MediumPriceContext);
    if (!context) throw new Error("useLogged must be used within a AuthProvider");
    
    const { quantity, 
            setQuantity, 
            price, 
            setPrice, 
            mediumPrice, 
            setMediumPrice, 
            sumAll, 
            setSum,
            list,
            setList
          } = context;

    return {
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
          }
}