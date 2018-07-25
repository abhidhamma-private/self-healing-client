import React, { Component } from 'react';

import { Drawer, AppBar, Toolbar, IconButton, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
//list
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const SimpleList = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  );
};

class Header extends Component {
  state = {
    left: false,
  };

  toggleSidebar = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const list = (
      <div>
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem button component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
      </div>
    );
    return (
      <AppBar>
        <Toolbar>
          <IconButton onClick={this.toggleSidebar('left', true)}>
            <MenuIcon />
            <Hidden>
              <Drawer
                open={this.state.left}
                onClose={this.toggleSidebar('left', false)}>
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleSidebar('left', false)}
                  onKeyDown={this.toggleSidebar('left', false)}>
                  {list}
                </div>
              </Drawer>
            </Hidden>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
