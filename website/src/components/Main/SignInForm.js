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
  submit: {
    marginTop: theme.spacing.unit * 3
  }
})

class SignInForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    const { username, password } = this.state
    const { history } = this.props
    API.signin(username, password).then(data => {
      if (data.error) {
        window.alert(data.error)
        return
      }
      actions.user.signin(data.user.username)
      actions.player.hydrateQueue(data.user.episodes)
      window.localStorage.setItem('token', data.token)
      history.push('/')
    })
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  render () {
    const { classes, showSignup } = this.props
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
            <Typography variant='headline'>Sign in</Typography>
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
              <Button
                type='submit'
                fullWidth
                variant='raised'
                color='primary'
                className={classes.submit}
              >
                Sign in
              </Button>
            </form>
            <Button
              onClick={showSignup}
              color='primary'
              className={classes.submit}
            >
              New to QIT?
            </Button>
          </Paper>
        </main>
      </div>
    )
  }
}

SignInForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(withRouter(SignInForm))
