import React, { Component } from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

import { SideBarWrapper } from './css';
import Logo from './logo.png';

class SideBar extends Component {
  state = { visible: true }

  handleItemClick = (e, { name }) => console.log( name )

  render() {
    const { visible } = this.state

    return (
      <SideBarWrapper>
        <Sidebar as={Menu} animation='push' width='very thin' visible={visible} vertical>
          <Menu.Item
            name='brand'
            onClick={this.handleItemClick}>
              <img src={Logo} alt='brand'/>
          </Menu.Item>
          <Menu.Item 
            name='home'
            onClick={this.handleItemClick}>
              <Icon name='home' size='big'/>
              Home
          </Menu.Item>
          <Menu.Item
            name='user' 
            onClick={this.handleItemClick}>
              <Icon name='users' size='big'/>
              Users
          </Menu.Item>
          <Menu.Item 
            position='right'
            name='sign out'
            onClick={this.handleItemClick}>
              <Icon name='sign out' size='big'/>
              Logout
          </Menu.Item>
        </Sidebar>
      </SideBarWrapper>
    )
  }
}

export default SideBar