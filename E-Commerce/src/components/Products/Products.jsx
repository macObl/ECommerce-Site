import React from 'react';
import { Grid  }from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
import { SliderData } from "./Home/SliderData";
import Home  from './Home/Home.jsx';
import Intro  from './Intro/Intro.jsx';
import Sub  from './Sub/Sub.jsx';


const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
    return (
        <>
        <Home slides={SliderData} />
        <Intro />
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}  />
                    </Grid>
                ))}
            </Grid>
        </main>
        <Sub />
        </>
    )
}

export default Products;