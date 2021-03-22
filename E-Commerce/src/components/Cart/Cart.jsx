import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';

import useStyles from './styles';
import CartItem from './CartItem/CartItem.jsx';

export const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1"className={classes.emptyCart}>Your Cart is Empty 
            <Link to='/' className={classes.link}> Add Items to Cart</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCardQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4"> Subtotal: { cart.subtotal.formatted_with_symbol }</Typography>
            </div>
            <div className={classes.cardButtons}>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained"  onClick={handleEmptyCart}>Empty Cart</Button>
                <Button component={Link}  to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" >Checkout</Button>
            </div>
        </>
    );

    if(!cart.line_items) return 'Loading...'

    return (
        <Container>
            <div  className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart