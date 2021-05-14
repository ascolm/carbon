import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  popper: {
    top: '2rem',
    opacity: '0.6'
  },
  paper: {
    padding: '1rem'
  },
  flashIcon: {
    color: 'black',
    fontSize: '1rem',
    verticalAlign: 'text-bottom',
    lineHeight: '1.4rem'
  }
}));