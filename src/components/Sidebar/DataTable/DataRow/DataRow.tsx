import React from 'react';
import { DailyData } from 'interfaces';
import { TableRow, TableCell, TextField } from '@material-ui/core';

export interface Props {
  day: string,
  dayData: DailyData,
  dataChangeHandler: (day: string, key: string, value: string) => void
}

const DataRow: React.FC<Props> = ({ day, dayData, dataChangeHandler }) => {
  return (
    <TableRow>
      <TableCell component="th">{day}</TableCell>

      <TableCell align="left"><TextField variant='outlined' value={dayData.time} type='time' size='small' margin='none' inputProps={{style: {padding: '0.3rem'}}} onChange={(e) => dataChangeHandler(day, 'time', e.currentTarget.value)}/></TableCell>

      <TableCell align="left"><TextField variant='outlined' value={dayData.location} size='small' margin='none' inputProps={{style: {padding: '0.3rem'}}} onChange={(e) => dataChangeHandler(day, 'location', e.currentTarget.value)}/></TableCell>

      <TableCell align="left"><TextField variant='outlined' value={dayData.usage} size='small'margin='none' inputProps={{style: {padding: '0.3rem'}}} onChange={(e) => dataChangeHandler(day, 'usage', e.currentTarget.value)}/></TableCell>
    </TableRow>
  );
}

export default React.memo(DataRow);