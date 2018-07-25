import React, { Component } from 'react';

import { Drawer, AppBar, Toolbar, IconButton, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

import list from './list';

const StyledAppBar = styled(AppBar)`
  && {
    background-color: #d6e6f5;
  }
`;

const StyledMenu = styled.div`
  && {
    background-color: #d6e6f5;
  }
`;

const StyledDrawer = styled(({ classes, ...rest }) => (
  <Drawer {...rest} classes={{ paper: 'paper' }} />
))`
  & .paper {
    background-color: #d6e6f5;
  }
`;

class Header extends Component {
  state = {
    left: false,
  };

  toggleSidebar = () => () => {
    this.setState({
      left: !this.state.left,
    });
  };

  render() {
    return (
      <StyledAppBar>
        <Toolbar>
          <IconButton onClick={this.toggleSidebar()}>
            <MenuIcon />
            <Hidden>
              <StyledDrawer
                open={this.state.left}
                onClick={this.toggleSidebar()}>
                <StyledMenu
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleSidebar()}
                  onKeyDown={this.toggleSidebar()}>
                  {list}
                </StyledMenu>
              </StyledDrawer>
            </Hidden>
          </IconButton>
        </Toolbar>
      </StyledAppBar>
    );
  }
}

export default Header;
