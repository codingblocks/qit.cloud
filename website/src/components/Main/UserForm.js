import React from 'react'

import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import { withStyles } from '@material-ui/core'

const styles = {
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    paddingTop: '100px',
    display: 'flex',
    justifyContent: 'center'
  },
  wrapper: {
    background: 'white'
  }
}

class UserForm extends React.Component {
  state = {
    signup: false
  }

  showSignup = () =>
    this.setState({ signup: true })

  showSignin = () =>
    this.setState({ signup: false })

  render () {
    const { signup } = this.state
    const { classes, history } = this.props
    const { showSignin, showSignup } = this
    return (
      <div
        id='user-form'
        className={classes.modal}
        onClick={event => {
          if (event.target.id !== 'user-form') return
          history.push('/')
        }}
      >
        {
          signup
            ? <SignUpForm showSignin={showSignin} />
            : <SignInForm showSignup={showSignup} />
        }
      </div>
    )
  }
}

export default withStyles(styles)(UserForm)
