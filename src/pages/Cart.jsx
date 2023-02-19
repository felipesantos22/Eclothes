import React from 'react'
import { useContext } from 'react';
import MultiActionAreaCard from '../components/Card';
import { AuthContext } from '../Context/CardContext';

const Cart = () => {
    const { cart } = useContext(AuthContext);
    return (
        <div className='product'>
            {
                cart.map((product, index) => (
                    <div key={index} >
                        <MultiActionAreaCard product={product} />
                    </div>
                ))
            }
        </div>
    )
}

export default Cart