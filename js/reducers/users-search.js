export default (
  state = {
    loading: false,
    loaded: false,
    users: [],
    error: null
  },
  action
) => {
  switch (action.type) {
    case 'SEARCH_USERS_PENDING':
      state = { ...state, loading: true }
      break
    case 'SEARCH_USERS_REJECTED':
      state = { ...state, loading: false, error: action.payload }
      break
    case 'SEARCH_USERS_FULFILLED':
      state = {
        ...state,
        loading: false,
        loaded: true,
        users: action.payload
      }
      break
    case 'GET_USER_PENDING':
      state = { ...state, loading: true }
      break
    case 'GET_USER_REJECTED':
      state = { ...state, loading: false, error: action.payload }
      break
    case 'GET_USER_FULFILLED':
      const foundUser = action.payload
      const users = state.users.map(user => {
        return user.login === foundUser.login
          ? {...user, ...foundUser}
          : user
      })
      state = {
        ...state,
        loading: false,
        loaded: true,
        users: users
      }
      break
    default:
  }
  return state
}
