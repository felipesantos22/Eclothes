import React, { useContext, useEffect, useState } from 'react'
import MultiActionAreaCard from '../components/Card';
import '../css/Home.css'
import { AuthContext } from '../Context/CardContext';
import Header from '../components/Header';

const Home = () => {
    const { data, AddToCar } = useContext(AuthContext);
    return (
        <div>            
            <div className='product'>
                {
                    data.map((product, index) => (
                        <div key={index} className='card' >
                            <MultiActionAreaCard product={product} AddToCar={AddToCar} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home