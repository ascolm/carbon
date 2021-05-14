import { AppBar, Toolbar, IconButton, Typography, Popper, Fade, Paper } from '@material-ui/core';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import useStyles from './Topbar-styles';
import { useState, useEffect, useRef } from 'react';

export interface Props {
  drawerHandler: (state?: boolean) => void,
  drawerIsOpen: boolean
}

const Topbar: React.FC<Props> = ({ drawerHandler, drawerIsOpen }) => {
  let [anchorElement, setAnchorElement] = useState<null | HTMLDivElement>(null);
  let [popperOpen, setPopperOpen] = useState<boolean>(false);

  const menuButtonRef = useRef(null);
  const propDisplayedOnce = useRef(false);

  useEffect(() => {
    if (!drawerIsOpen && !propDisplayedOnce.current) {
      setPopperOpen(true);
      setAnchorElement(menuButtonRef.current);
      setPopperOpen(true);
      propDisplayedOnce.current = true;
      setTimeout(() => setPopperOpen(false), 3000);
    }
  }, [drawerIsOpen]);

  const classes = useStyles();
  const open = Boolean(anchorElement);
  const id = open ? 'transitions-popper' : undefined;

  function menuButtonHandler (e: React.MouseEvent<HTMLButtonElement>) {
    drawerHandler();
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>

        <div ref={menuButtonRef}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={(e) => menuButtonHandler(e)}
            edge="start"
            >
            <FlashOnIcon color='secondary'/>
          </IconButton>
        </div>

        <Popper id={id} open={popperOpen} anchorEl={anchorElement} className={classes.popper} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={{exit: 2000}}>
              <Paper className={classes.paper}>
                <p>Click on <span><FlashOnIcon className={classes.flashIcon}/></span> button to reopen the menu.</p>
              </Paper>
            </Fade>
          )}
        </Popper>

        <Typography variant="h6" noWrap>
          Electricity Usage
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;




