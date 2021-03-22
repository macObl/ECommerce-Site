import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    logoutBtn:{
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        color: '#e9e9e9',
        backgroundColor: '#000000',
    },
    account:{
        fontFamily: 'Montserrat',
        marginBottom: '30%',
    },
    card: {
        width: '400px',
        margin: '75px auto 0',
        backgroundColor: '#fff',
        boShadow: '0 3px 30px rgba(0, 0, 0, 0.14',
        color: '#444',
        textAlign: 'center',
        fontSize: '16px',
    },
    cardHeader: {
        position: 'relative',
        height: '48px',
    },
}));