import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    logintTitle:{
        fontSize: '50px',
        color: '#fafafa',
    },
    button: {
        border: 'none',
        outline: 'none',
        width: '100%',
        padding: '15px 0',
        color: '#000000',
        fontSize: '16px',
        letterSpacing: '1px',
        background: '#fafafa',
        borderRadius: '10px',
        cursor: 'pointer',
        fontFamily: 'Montserrat',
        fontWeight: '700'
    },
    login: {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        width: '100%',
        minHeight: '100vh',
        padding: '0 20px',
        backgorund: '#e9e9e9',
        display: 'flex',
    },
    loginContainer: {
        padding: '60px',
        margin: 'auto',
        width: '100%',
        maxWidth: '520px',
        minHeight: '600px',
        display: 'flex',
        borderRadius: '30px',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#000000',
        boxShadow: '0 50px 70px -20px rgba(0, 0, 0, 0.8)',
    },
    accountlbl:{
        color: 'white',
        margin: '14px 0',
        display: 'block',
        fontSize: '22px',
        lineHeight: '1',
    },
    input: {
        width: '100%',
        border: 'none',
        outline: 'none',
        fontSize: '19px',
        padding: '10px 0',
        background: 'rgba(255, 255, 255, 0.4)',
        color: '#fff',
        letterSpacing: '1px',
        textIndent: '10px',
    },  
    btnContainer: {
        width: '100%',
        padding: '24px 0',
    },
    buttonP:{
        margin: '14px 0 0 0',
        textAlign: 'right',
        color: '#ffffff',
    },
    upIn: {
        color: '#f8ff2e',
        fontWeight: '500',
        letterSpacing: '0.5px',
        marginLeft: '5px',
        cursor: 'pointer',
        transition: 'all 400ms ease-in-out',
    },
    errorMsg: {
        color: 'red',
        fontSize: '16px',
    }
}));