import { Drawer, Box, Button, Toolbar } from '@material-ui/core';
import TimelineIcon from '@material-ui/icons/Timeline';
import pika from 'assets/pikalogo.png';
import useStyles from './Sidebar-styles';
import DataTable from './DataTable/DataTable';
import { useState } from 'react';
import { WeeklyData } from 'interfaces';
import { blankData, formHasMissingData } from './Sidebar-utils';
import Alert from '@material-ui/lab/Alert';

export interface Props {
  drawerIsOpen: boolean,
  drawerHandler: (state?: boolean) => void,
  calculateCarbon: (input: WeeklyData) => void
}

const Sidebar: React.FC<Props> = ({ drawerIsOpen, drawerHandler, calculateCarbon }) => {
  let [weeklyData, setWeeklyData] = useState<WeeklyData>(blankData);
  let [isDisplayingAlert, setIsDisplayingAlert] = useState<boolean>(false);

  const classes = useStyles();

  function dataChangeHandler (day: string, key: string, value: string) {
    setWeeklyData(prevData => {
      let assignedValue;
      if (key === 'usage') assignedValue = parseFloat(value);
      else assignedValue = value;

      const newState = Object.assign({}, prevData);
      newState[day][key] = value;
      return newState;
    })
  }

  function generateButtonHandler (e: React.MouseEvent) {
    e.preventDefault();
    if (formHasMissingData(weeklyData)) {
      setIsDisplayingAlert(true);
      setTimeout(() => setIsDisplayingAlert(false), 5000);
      return;
    };

    calculateCarbon(weeklyData);
    drawerHandler(false);
  }

  return (
    <Drawer variant='persistent' open={drawerIsOpen}>
      <Toolbar />
      <Box display='flex' flexDirection='column' justifyContent="center" alignItems="center" className={classes.box}>
        <img className={classes.pika} src={pika} alt=""/>
        <form>
          <Box display='flex' flexDirection='column' justifyContent="center" alignItems="center">
            <DataTable weeklyData={weeklyData} dataChangeHandler={dataChangeHandler}/>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="small"
              className={classes.button}
              aria-label='Generate graph button'
              startIcon={<TimelineIcon color='secondary'/>}
              onClick={(e) => generateButtonHandler(e)}
            >
              Generate Graph
            </Button>
          </Box>
        </form>

        {isDisplayingAlert &&
          <Alert variant="outlined" severity="error" style={{width: '80%', marginTop: '2rem'}}>
            Please make sure you fill out all fields.
          </Alert>
        }

      </Box>
    </Drawer>
  );
}

export default Sidebar;