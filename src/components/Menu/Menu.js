import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import LoginBtn from '../Login/Login'

export default class MenuExampleInverted extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted style={{ width:"100%"}}>
        <Menu.Item className="menu"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Statystyki'
          active={activeItem === 'Statystyki'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Autor'
          active={activeItem === 'Autor'}
          onClick={this.handleItemClick}
        />
        <LoginBtn />
      </Menu>
    )
  }
}
