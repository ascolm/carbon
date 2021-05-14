import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#0a064a'
    },
    secondary:{
      main: '#2fece2'
    }
  },
  overrides: {
    MuiSelect: {
      select: {
        minWidth: '6rem'
      }
    },
    MuiOutlinedInput: {
      inputMarginDense: {
        paddingTop: '0.3rem',
        paddingBottom: '0.3rem'
      }
    }
  }
});