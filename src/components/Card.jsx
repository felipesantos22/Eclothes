import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useCallback } from 'react';
import { AuthContext } from '../Context/CardContext';

const MultiActionAreaCard = ({ product, funCar }) => {    
    return (
        <Card sx={{ maxWidth: 345 }}>
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
                <button onClick={ () => funCar(product.id)}>Comprar</button>
            </CardActions>
        </Card>
    );
}

export default MultiActionAreaCard;
