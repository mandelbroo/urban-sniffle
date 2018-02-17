import github from '../github'

export function searchUsers(username) {
  return {
    type: 'SEARCH_USERS',
    payload: github.searchUsers(username)
  }
}
export function getUser(login) {
  return {
    type: 'GET_USER',
    payload: github.getUser(login)
  }
}
