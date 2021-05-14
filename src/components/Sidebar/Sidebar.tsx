import { Drawer, Box, Button, Toolbar } from '@material-ui/core';
import TimelineIcon from '@material-ui/icons/Timeline';
import pika from 'assets/pikalogo.png';
import useStyles from './Sidebar-styles';
import DataTable from './DataTable/DataTable';

export interface Props {
  drawerIsOpen: boolean
}

const Sidebar: React.FC<Props> = ({ drawerIsOpen }) => {
  const classes = useStyles();

  return (
    <Drawer variant='persistent' open={drawerIsOpen}>
      <Toolbar />
      <Box display='flex' flexDirection='column' justifyContent="center" alignItems="center" className={classes.box}>
        <img className={classes.pika} src={pika} alt=""/>

        <DataTable/>

        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<TimelineIcon color='secondary'/>}
        >
          Generate Graph
        </Button>
      </Box>
    </Drawer>
  );
}

export default Sidebar;