import React, { useState } from 'react';
import { DailyData } from 'interfaces';
import { TableRow, TableCell, TextField,MenuItem } from '@material-ui/core';
import { usageIsValid } from './DataRow-utils';

export interface Props {
  day: string,
  dayData: DailyData,
  dataChangeHandler: (day: string, key: string, value: string) => void
}

const DataRow: React.FC<Props> = ({ day, dayData, dataChangeHandler }) => {
  let [invalidUsage, setInvalidUsage] = useState<boolean>(false);

  function handleChangeIfValid (key: string, value: string) {
    if (key === 'usage' && value) {
      if (!usageIsValid(value)) {
        setInvalidUsage (true);
        setTimeout(() => setInvalidUsage(false), 200);
        return;
      } else if (invalidUsage && usageIsValid(value)) {
        setInvalidUsage(false);
      }
    }
    dataChangeHandler(day, key, value);
  }

  return (
    <TableRow>

      {/* DAY */}
      <TableCell component="th">
        {day}
      </TableCell>

      {/* TIME */}
      <TableCell align="left">
        <TextField
          variant='outlined'
          value={dayData.time}
          type='time'
          size='small'
          margin='none'
          inputProps={{style: {padding: '0.3rem'}, 'aria-label': `Time input for ${day}`}}
          onChange={(e) => handleChangeIfValid('time', e.currentTarget.value)}
          />
      </TableCell>

      {/* LOCATION */}
      <TableCell align="left">
        <TextField
          variant='outlined'
          select
          value={dayData.location}
          size='small'
          margin='none'
          inputProps={{style: {padding: '0.3rem'}, 'aria-label': `Location input for ${day}`}}
          onChange={(e) => handleChangeIfValid('location', e.target.value)}
        >
          <MenuItem value=''>
          </MenuItem>
          <MenuItem value='ca'>
            Canada
          </MenuItem>
          <MenuItem value='us'>
            United States
          </MenuItem>
        </TextField>
      </TableCell>

      {/* USAGE */}
      <TableCell align="left">
        <TextField
        error={invalidUsage}
        variant='outlined'
        value={dayData.usage === null ? '' : dayData.usage}
        size='small'
        margin='none'
        inputProps={{style: {padding: '0.3rem'}, 'aria-label': `Usage input for ${day}`}}
        onChange={(e) => handleChangeIfValid('usage', e.currentTarget.value)}
        />
      </TableCell>

    </TableRow>
  );
}

export default React.memo(DataRow);