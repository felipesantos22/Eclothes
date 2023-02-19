import React, { createContext, useEffect, useState, useMemo } from 'react';
import chothesApi from '../services/Api';
export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    const funcApi = async () => {
        const { products } = await chothesApi();
        setData(products)
    }

    const funCar = (id) => {
        const newCart = data.find((item) => item.id === id);
        console.log(newCart);
        setCart([...cart, newCart]);
    }

    useEffect(() => {
        funcApi();
    }, [])

    // const values = useMemo(() => ({
    //     data,
    //     cart,        
    //     funcCart
    // }), [data, cart, funcCart]);

    const values = {
        data,
        cart,
        funCar
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {}.isRequired;
