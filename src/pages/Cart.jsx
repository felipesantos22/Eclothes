import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../Context/CardContext';
import '../css/Home.css'
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {
    const { cart, deleteProduct, clearCart } = useContext(AuthContext);
    return (
        <>
            <div className='product'>
                {
                    cart.length === 0 ? <h1>Carrinho Vazio</h1> :
                        cart.map((product, index) => (
                            <div key={index} >
                                <Card sx={{ maxWidth: 345, height: 400 }}>
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
                                        <FaTrashAlt onClick={() => deleteProduct(product.id)}/>
                                    </CardActions>
                                </Card>
                            </div>
                        ))
                }                            
            </div>
            <Button size="small" color="primary" type='button' onClick={clearCart}>                                       Clear Cart
                                        </Button>
        </>
    )
}

export default Cart;