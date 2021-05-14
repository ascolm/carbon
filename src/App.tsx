import './App.css';
import { useState } from 'react';
import projectTheme from 'theme';
import { ThemeProvider } from '@material-ui/core';
import useStyles from './App-styles';
import Topbar from 'components/Topbar/Topbar';
import Sidebar from 'components/Sidebar/Sidebar';

function App() {
  let [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(true);

  function drawerHandler (isOpen?: boolean) {
    if (isOpen) {
      setDrawerIsOpen(isOpen);
    } else {
      setDrawerIsOpen(prev => !prev);
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={projectTheme}>
        <Topbar drawerHandler={drawerHandler} drawerIsOpen={drawerIsOpen}/>
        <Sidebar drawerHandler={drawerHandler} drawerIsOpen={drawerIsOpen}/>
      </ThemeProvider>
    </div>
  );
}

export default App;