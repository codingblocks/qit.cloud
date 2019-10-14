import React from 'react'
import styled from 'styled-components'
import { connect, actions, withRouter } from 'mirrorx'

import Person from '@material-ui/icons/Person'
import PersonOutlined from '@material-ui/icons/PersonOutlined'

import Title from './Title'
import Search from './Search'
import Logo from './Logo'
import Subtitle from './Subtitle'


const styles = {
  icon: {
    color: 'white',
    position: 'absolute',
    width: '48px'
  }
}

const Header = ({ currentUser, history, className }) =>
  <header className={className}>
    {
      currentUser
        ? <PersonOutlined
          onClick={() => {
            actions.user.signout()
            actions.player.hydrateQueue([])
            history.push('/signin')
          }}
          style={styles.icon}
        />
        : <Person
          onClick={() => history.push('/signin')}
          style={styles.icon}
        />
    }
    <Title>
      <Subtitle>
        <Search />
      </Subtitle>
      <Logo text='qit' href='/about/' history={history} />
    </Title>
  </header>

const StyledHeader = styled(Header)`
  width: 100%;
  max-width: 800px;
  height: 56px;
  color: #FFF;
  background: #298478;
  position: fixed;
  font-size: 20px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 9px 1px rgba(0, 0, 0, 0.12), 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  padding: 16px 16px 0 16px;
  will-change: transform;

  transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;
  z-index: 1000;
`

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(withRouter(StyledHeader))
