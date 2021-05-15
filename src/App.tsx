import './App.css';
import { useState } from 'react';
import { WeeklyData, CarbonData } from 'interfaces';
import projectTheme from 'theme';
import { ThemeProvider, Container, Box } from '@material-ui/core';
import useStyles from './App-styles';
import { CircleSpinner } from 'react-spinners-kit';
import Topbar from 'components/Topbar/Topbar';
import Sidebar from 'components/Sidebar/Sidebar';
import { fetchWeeklyCarbonData } from 'App-utils';
import Graph from 'components/Graph/Graph';
import Alert from '@material-ui/lab/Alert';

function App() {
  let [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(true);
  let [carbonData, setCarbonData] = useState<CarbonData[]>([]);
  let [isLoading, setIsLoading] = useState<boolean>(false);
  let [isInErrorState, setIsInErrorState] = useState<boolean>(false);

  function drawerHandler (isOpen?: boolean) {
    if (isOpen) {
      setDrawerIsOpen(isOpen);
    } else {
      setDrawerIsOpen(prev => !prev);
    }
  }

  async function calculateCarbon (input: WeeklyData) {
    if (isInErrorState) {
      setIsInErrorState(false);
    }
    setIsLoading(true);

    try{
      const data = await fetchWeeklyCarbonData(input);
      setCarbonData(data);
    } catch (err) {
      setIsInErrorState(true);
    }

    setIsLoading(false);
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={projectTheme}>
        <Topbar drawerHandler={drawerHandler} drawerIsOpen={drawerIsOpen}/>
        <Sidebar drawerHandler={drawerHandler} drawerIsOpen={drawerIsOpen} calculateCarbon={calculateCarbon}/>

        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' style={{height: '100vh', flexGrow: 1}}>
          {isLoading &&
            <CircleSpinner color={projectTheme.palette.secondary.main}/>
          }

          {!isLoading && carbonData.length > 0 &&
            <Graph carbonData={carbonData}/>
          }

          {isInErrorState &&
            <Alert variant="outlined" severity="error">
              Carbon estimation could not be fetched. Please try again later.
            </Alert>
          }
        </Box>

      </ThemeProvider>
    </div>
  );
}

export default App;