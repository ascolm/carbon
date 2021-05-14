import useStyles from './DataTable-styles';
import { useState } from 'react';
import { TableContainer, Table, TableRow, TableHead, TableCell, TableBody, Paper, TextField } from '@material-ui/core';
import ScheduleIcon from '@material-ui/icons/Schedule';
import RoomIcon from '@material-ui/icons/Room';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import { DailyData, WeeklyData } from 'interfaces';
import { blankData } from './DataTable-utils';
import DataRow from './DataRow/DataRow';

export interface Props {
}

const DataTable: React.FC<Props> = (props: Props) => {
  let [weeklyData, setWeeklyData] = useState<WeeklyData>(blankData);

  const classes = useStyles();

  function dataChangeHandler (day: string, key: string, value: string) {
    console.log(weeklyData);
    setWeeklyData(prevData => {
      const newState = Object.assign({}, prevData);
      newState[day][key] = value;
      return newState;
    })
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small">

        <TableHead >
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell align="left"><ScheduleIcon color='primary' className={classes.headerIcon}/> <p className={classes.headerText}>Time</p></TableCell>
            <TableCell align="left"><RoomIcon color='primary' className={classes.headerIcon}/> <p className={classes.headerText}>Location</p></TableCell>
            <TableCell align="left"><OfflineBoltIcon color='primary' className={classes.headerIcon}/> <p className={classes.headerText}>Usage (mwh)</p></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {Object.keys(weeklyData).map(day => {
            return <DataRow day={day} dayData={weeklyData[day]} dataChangeHandler={dataChangeHandler}/>
          })}
        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default DataTable;
