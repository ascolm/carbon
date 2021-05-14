import './App.css';
import projectTheme from 'theme';
import { ThemeProvider } from '@material-ui/core';
import useStyles from './App-styles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={projectTheme}>

      </ThemeProvider>
    </div>
  );
}

export default App;