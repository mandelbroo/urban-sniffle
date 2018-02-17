const baseUri = 'https://api.github.com'
const opts = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}
const params = '&sort=repositories&order=desc&page=1&per_page=5'

export default {
  searchUsers: (username) => {
    return fetch(`${baseUri}/search/users?q=${username}${params}`, opts)
      .then(res => res.json())
      .then(res => res.items)
  },
  getUser: (login) => {
    return fetch(`${baseUri}/users/${login}`, opts)
      .then(res => res.json())
  }
}
