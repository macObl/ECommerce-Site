import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    backgroundColor: '#000000',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    color: '#fafafa',
    fontFamily: 'Montserrat',
    fontSize: '2rem',
    fontWeight: '700'
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    color:'#fafafa',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchTxt: {
      top: '0',
      left: '0',
      padding: '5px 10px',
      borderRadius: '10px',
      fontFamily: 'Montserrat',
  },
  searchBtn: {
    color: '#fafafa',
  },
}));