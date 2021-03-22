import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    home: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        paddingBottom: '100px',
    },
    image: {
        width: '100%',
        maxHeight: '600px',
        height: 'auto',
        borderRadius: '10px',
        marginBottom: '-150px',
    },
    rightArrow: {
        position: 'absolute',
        top: '30%',
        right: '32px',
        fontSize: '3rem',
        color: '#000000',
        zIndex: '10',
        cursor: 'pointer',
        userSelect: 'none',
    },
    leftArrow: {
        position: 'absolute',
        top: '30%',
        left: '32px',
        fontSize: '3rem',
        color: '#000000',
        zIndex: '10',
        cursor: 'pointer',
        userSelect: 'none',
    },
    active: {
        opacity: '1',
        transitionDuration: '1s',
        transform: 'scale(1.02)',
    }
}));