import React, { createContext, useEffect, useState, useMemo } from 'react';
import chothesApi from '../services/Api';
import { getItem, setItem } from '../services/LocalStorage';
export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState(getItem('Cart') || []);
    // const [cart, setCart] = useState([]);

    const funcApi = async () => {
        const { products } = await chothesApi();
        setData(products)
    }

    const AddToCar = (id) => {
        const newCart = data.find((item) => item.id === id);
        console.log(newCart);
        setItem('Cart', [...cart, newCart]);
        setCart([...cart, { newCart, Quantity: 1 }]);
    }

    // const AddToCar = (id) => {
    //     const addItem = data.find((item) => item.id === id);
    //     const addQty = { amount: 1 };
    //     const itemInCart = Object.assign(addItem, addQty);
    //     console.log(addItem);
    //     // console.log(newAdd); 
    //     if (itemInCart) {
    //         cart.map((item) => {
    //             item.id === id ? setCart([...cart, item.amount + 1]) : item
    //         })
    //     }
    //     setCart([...cart, itemInCart]);
    // }

    const deleteProduct = (id) => {
        const deleteCart = cart.filter((item) => item.id !== id);
        setItem('Cart', deleteCart);
        setCart(deleteCart);
    }

    const totalValue = cart.reduce((acc, cur) => acc + cur.price, 0)

    const clearCart = () => {
        setCart([])
        localStorage.clear();
    }

    useEffect(() => {
        funcApi();
    }, [])

    const values = {
        data,
        cart,
        totalValue,
        AddToCar,
        deleteProduct,
        clearCart
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {}.isRequired;
