import { Drawer, Box, Button, Toolbar } from '@material-ui/core';
import TimelineIcon from '@material-ui/icons/Timeline';
import pika from 'assets/pikalogo.png';
import useStyles from './Sidebar-styles';
import DataTable from './DataTable/DataTable';
import { useState } from 'react';
import { WeeklyData } from 'interfaces';
import { blankData } from './Sidebar-utils';

export interface Props {
  drawerIsOpen: boolean
}

const Sidebar: React.FC<Props> = ({ drawerIsOpen }) => {
  let [weeklyData, setWeeklyData] = useState<WeeklyData>(blankData);

  const classes = useStyles();

  function dataChangeHandler (day: string, key: string, value: string) {
    setWeeklyData(prevData => {
      const newState = Object.assign({}, prevData);
      newState[day][key] = value;
      return newState;
    })
  }

  function generateButtonHandler (e: React.MouseEvent) {
    e.preventDefault();
    console.log(weeklyData);
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
              startIcon={<TimelineIcon color='secondary'/>}
              onClick={(e) => generateButtonHandler(e)}
            >
              Generate Graph
            </Button>
          </Box>
        </form>
      </Box>
    </Drawer>
  );
}

export default Sidebar;