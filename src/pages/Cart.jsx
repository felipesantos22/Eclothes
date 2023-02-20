import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../Context/CardContext';
import '../css/Home.css'
import Header from '../components/Header'

const Cart = () => {
    const { cart, deleteProduct, totalValue } = useContext(AuthContext);
    return (
        <>          
        <div className='product'>
            {
                cart.map((product, index) => (
                    <div key={index} >
                        <Card sx={{ maxWidth: 345, height:400 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.thumbnail}
                                    alt={product.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}' '
                                        R$ {product.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {/* <Button size="small" color="primary" type='button' onClick={() => funcCart(product.id)}>
                    Comprar
                </Button> */}
                                <button onClick={() => deleteProduct(product.id)}>Deletar</button>
                            </CardActions>
                        </Card>                       
                    </div>
                ))
            }
             <Button>{totalValue}</Button>
        </div>
        </>   
    )
}

export default Cart;