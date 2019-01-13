import React from 'react'
import { actions, withRouter } from 'mirrorx'

import API from '../../adapters/API'

import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  finePrint: {
    fontSize: `9px`
  }
})

class SignUpForm extends React.Component {
  state = {
    username: '',
    password: '',
    email: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    const { username, password, email } = this.state
    const { history } = this.props
    API.signup(username, password, email).then(data => {
      if (data.error) {
        window.alert(data.error)
        return
      }

      console.log('data: ', data)
      actions.user.signin(data.user.username)
      actions.player.hydrateQueue(data.user.episodes)
      window.localStorage.setItem('token', data.token)
      history.push('/')
    })
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  render () {
    const { classes, showSignin } = this.props
    const { handleSubmit, handleChange } = this
    return (
      <div>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar
              style={{ background: '#298478' }}
              className={classes.avatar}
            >
              <LockIcon />
            </Avatar>
            <Typography variant='headline'>Sign Up</Typography>
            <form onSubmit={handleSubmit} className={classes.form}>
              <FormControl margin='normal' required fullWidth>
                <InputLabel htmlFor='email'>Username</InputLabel>
                <Input
                  id='username'
                  name='username'
                  autoComplete='username'
                  autoFocus
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl margin='normal' required fullWidth>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <Input
                  name='password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl margin='normal' required fullWidth>
                <InputLabel htmlFor='email'>Email Address</InputLabel>
                <Input
                  id='email'
                  name='email'
                  autoComplete='email'
                  onChange={handleChange}
                />
              </FormControl>
              <Button type='submit' fullWidth variant='raised' color='primary'>
                Sign up
              </Button>
            </form>
            <p className='finePrint'>
              Note: signing up means you consent to using cookies on this site.
              Check out the{' '}
              <a href='https://github.com/codingblocks/qit.cloud/blob/master/privacy-policy.md'>
                privacy policy
              </a>{' '}
              for more information.
            </p>
            <Button onClick={showSignin} color='primary'>
              Already have an account?
            </Button>
          </Paper>
        </main>
      </div>
    )
  }
}

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(withRouter(SignUpForm))
