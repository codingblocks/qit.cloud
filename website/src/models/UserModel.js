import mirror from 'mirrorx'

export default mirror.model({
  name: 'user',
  initialState: {
    currentUser: null,
    showUserModal: false
  },
  reducers: {
    signin (state, currentUser) {
      return {...state, currentUser}
    },
    signout (state) {
      return {...state, currentUser: null}
    },
    showUserModal (state) {
      return {...state, showSigninModal: true}
    },
    hideUserModal (state) {
      return {...state, showSigninModal: false}
    }
  }
})
