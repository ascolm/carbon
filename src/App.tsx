import './App.css';
import projectTheme from 'theme';
import { ThemeProvider } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={projectTheme}>

      </ThemeProvider>
    </div>
  );
}

export default App;