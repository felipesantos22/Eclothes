import React, { useContext, useEffect, useState } from 'react'
import MultiActionAreaCard from '../components/Card';
import '../css/Home.css'
import { AuthContext } from '../Context/CardContext';

const Home = () => {

    const { data, funCar } = useContext(AuthContext);

    return (
        <div className='product'>
            {
                data.map((product, index) => (
                    <div key={index} >
                        <MultiActionAreaCard product={product} funCar={funCar} />
                    </div>
                ))
            }
        </div>
    )
}

export default Home