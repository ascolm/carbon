import './App.css';
import projectTheme from 'theme';
import { ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }
}));


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