import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  section: {
    padding: theme.spacing(5, 0),
    backgroundColor: '#ffffff',
    color: '#333333',
  },
  sectionTitle: {
    color: 'gold',
    fontSize: '2.5rem',
  },
  sectionSubtitle: {
    color: 'gray',
    fontSize: '2rem',
  },
  sectionGreen: {
    color: 'green',
    fontSize: '2rem',
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkgreen',
    },
  },
  imgFluid: {
    width: '50%',
    padding: theme.spacing(5),
  },
  imgHiddenOnSm: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
  newsInput: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flexGrow: 1,
  },
  footer: {
    marginTop: theme.spacing(5),
  },
}));