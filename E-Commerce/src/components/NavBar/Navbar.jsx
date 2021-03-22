import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/rocket_logo.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="50px" className={classes.image}/>
                        TakeOff
                    </Typography>
                    <div  className={classes.grow} />
                    <div className={classes.searchBox}>
                        <IconButton  aria-label="" color="inherit">
                            {/* <input type="text" className={classes.search} placeholder="Search... " /> */}
                            <SearchIcon className={classes.searchBtn}/>
                        </IconButton>
                    </div>
                    <div className={classes.button}>
                        <IconButton component={Link} to='/login' aria-label="" color="inherit">
                            <AccountCircleIcon />
                        </IconButton>
                    </div>
                    {location.pathname == '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color='primary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
