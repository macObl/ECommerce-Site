import React, { useState, useEffect } from 'react';
import fire from './fire';
import Login from './Login/Login.jsx';
import Account from './Account/Account.jsx'
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@material-ui/core'

import useStyles from './styles';

const LoginAuth = () => {
    const [user, setUser] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    };

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleSignUp = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code){
                    case "auth/email-alread-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if(user)
            {
                clearInputs();
                setUser(user);
            }
            else
            {
                setUser('');
            }
        })
    };

    useEffect(() => {
        authListener();
    }, [])

    const classes = useStyles();

    return (
        <Container>
            <div  className={classes.toolbar} />
            <div className={classes.loginWindow}>
                {user ? (
                    <>
                    <Account handleLogout={handleLogout} />
                    </>
                ) : (
                    <>
                    <Login 
                        eamil={email}
                        setEmail={setEmail} 
                        password={password} 
                        setPassword={setPassword} 
                        handleLogin={handleLogin} 
                        handleSingup={handleSignUp}
                        hasAccount={hasAccount}
                        setHasAccount={setHasAccount}
                        emailError={emailError}
                        passwordError={passwordError}
                    />
                    </>
                )}
            </div>
        </Container>
    )
}

export default LoginAuth
