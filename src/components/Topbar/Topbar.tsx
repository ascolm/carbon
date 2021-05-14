import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import useStyles from './Topbar-styles';

export interface Props {
  drawerHandler: (state?: boolean) => void;
}

const Topbar: React.FC<Props> = ({ drawerHandler }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => drawerHandler()}
          edge="start"
        >
          <FlashOnIcon color='secondary'/>
        </IconButton>

        <Typography variant="h6" noWrap>
          Electricity Usage
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;




