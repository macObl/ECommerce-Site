import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    fontFamily: 'Montserrat',
    fontWeight: '700',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
    backgroundColor: '#000000',
    color: '#fafafa',
    fontFamily: 'Montserrat',
  },
  checkoutButton: {
    minWidth: '150px',
    backgroundColor: '#000000',
    color: '#fafafa',
    fontFamily: 'Montserrat',
  },
  emptyCart: {
    paddingLeft: '100px',
    paddingBottom: '50%',
    fontFamily: 'Montserrat',
  },
  link: {
    textDecoration: 'none',
    marginLeft: '2%',
    backgroundColor: '#000000',
    color: '#fafafa',
    padding: '2px 6px 2px 6px',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    fontFamily: 'Montserrat',
    justifyContent: 'space-between',
  },
  cardButtons: {
    fontFamily: 'Montserrat',
    paddingBottom: '20%',
  },
}));