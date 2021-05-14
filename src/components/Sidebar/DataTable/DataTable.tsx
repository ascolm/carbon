import useStyles from './DataTable-styles';
import { useState } from 'react';
import { TableContainer, Table, TableRow, TableHead, TableCell, TableBody, Paper, TextField } from '@material-ui/core';
import ScheduleIcon from '@material-ui/icons/Schedule';
import RoomIcon from '@material-ui/icons/Room';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import { DailyData, WeeklyData } from 'interfaces';
import DataRow from './DataRow/DataRow';
import React from 'react';

export interface Props {
  weeklyData: WeeklyData,
  dataChangeHandler: (day: string, key: string, value: string) => void
}

const DataTable: React.FC<Props> = ({ weeklyData, dataChangeHandler }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small">

        <TableHead >
          <TableRow>
            <TableCell>
              Day
            </TableCell>

            <TableCell align="left">
              <ScheduleIcon color='primary' className={classes.headerIcon}/> <p className={classes.headerText}>Time</p>
            </TableCell>

            <TableCell align="left">
              <RoomIcon color='primary' className={classes.headerIcon}/> <p className={classes.headerText}>Location</p>
            </TableCell>

            <TableCell align="left">
              <OfflineBoltIcon color='primary' className={classes.headerIcon}/> <p className={classes.headerText}>Usage (mwh)</p>
            </TableCell>
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

export default React.memo(DataTable);