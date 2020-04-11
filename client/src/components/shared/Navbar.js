import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { AuthConsumer } from '../../providers/AuthProvider';
import img from '../../images/OCTO_LOGO.jpg';
import styled from 'styled-components';

const Styles = styled.div`
.img{
  margin-left: 5px;
  width: 30px;
  height: 35px;
}
`
class Navbar extends Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout }, location } = this.props
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={() => handleLogout(this.props.history)}
          />
          <Link to='/myBudgets'>
            <Menu.Item 
            id='My Budgets'
            name='My Budgets'
            active={location.pathname === '/myBudgets'}
            />
          </Link>
        </Menu.Menu>
      )
    } else {
      return(
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  render() {
    return(
      <div>
        <Styles>
          <Menu pointing secondary>
            <Link to='/'>
              <img src={img}
                className='img'
                active={this.props.location.pathname === '/'}
                />
            </Link>
              { this.rightNavItems() }
          </Menu>
        </Styles>
      </div>
    )
  }
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value =>
      <Navbar {...props } auth={value} />
    }
  </AuthConsumer>
)

export default withRouter(ConnectedNavbar);