import React from 'react';

import logo from '../../../assets/AccountImg/blank-profile.png';
import useStyles from './styles';

const Account = ({handleLogout}) => {
    const classes = useStyles();
    return (
        <section className={classes.account}>
            <div className={classes.card}>
                <h1 className={classes.title}>My account</h1>
                <br/>
                <button onClick={handleLogout} className={classes.logoutBtn}>Logout</button>
                <br/>
                <br/>
                <div className={classes.cardBody}>
                        <p className={classes.username}>@UserExample</p>
                </div>
            </div>
        </section>
    )
}

export default Account
