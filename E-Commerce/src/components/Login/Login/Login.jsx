import React from 'react';

import useStyles from './styles';

const Log = (props) => {
    const classes = useStyles();

    const{  
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSingup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError,
        } = props;

    return (
        <section className={classes.login}>
            <div className={classes.loginContainer}>
                <h1 className={classes.logintTitle}>Login or Sign Up</h1>
                <label className={classes.accountlbl}>Username</label>
                <input 
                type="text" 
                autoFocus 
                className={classes.input}
                required 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}
                />
                <p className={classes.errorMsg}>{emailError}</p>
                <label className={classes.accountlbl}>Password</label>
                <input 
                type="password" 
                className={classes.input}
                required 
                value={password} 
                onChange={(e)=> setPassword(e.target.value)}
                />
                <p className={classes.errorMsg}>{passwordError}</p>

                <div className={classes.btnContainer}>
                    {hasAccount ? (
                        <>
                        <button className={classes.button} onClick={handleSingup}>Sign Up</button>
                        <p className={classes.buttonP}>Have an account?  
                        <span  className={classes.upIn} onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                    ) : (
                        <>
                        <button className={classes.button} onClick={handleLogin}>Sign In</button>
                        <p className={classes.buttonP}>Don't have an account?  
                        <span className={classes.upIn} onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                        
                    )}
                </div>
            </div>
        </section>
    )
}

export default Log
