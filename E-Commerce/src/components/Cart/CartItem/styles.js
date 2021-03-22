import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  cardContentTitle: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
  cardActionsBtn: {
    backgroundColor: '#000000',
    color: '#fafafa',
    fontFamily: 'Montserrat',
  }
}));