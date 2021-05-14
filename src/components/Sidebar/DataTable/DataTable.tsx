import useStyles from './DataTable-styles';
import { TableContainer, Table, TableRow, TableHead, TableCell, TableBody, Paper, TextField } from '@material-ui/core';
import ScheduleIcon from '@material-ui/icons/Schedule';
import RoomIcon from '@material-ui/icons/Room';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';

export interface Props {
}

const DataTable: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

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
          <TableRow>
            <TableCell component="th" scope="row">Monday</TableCell>
            <TableCell align="left"><TextField variant='outlined' type='time' size='small' margin='none' inputProps={{style: {padding: '0.3rem'}}}/></TableCell>
            <TableCell align="left"><TextField variant='outlined' size='small' margin='none' inputProps={{style: {padding: '0.3rem'}}}/></TableCell>
            <TableCell align="left"><TextField variant='outlined' size='small'margin='none' inputProps={{style: {padding: '0.3rem'}}}/></TableCell>
          </TableRow>
        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default DataTable;
