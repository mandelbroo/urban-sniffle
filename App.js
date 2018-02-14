import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBox from './components/search-box'

const Item = (user, key) => {
  return (
    <View key={ key } style={ styles.item }>
      <Text style={ styles.itemText }>{ user.login }</Text>
      <Text style={ styles.itemText }>{ user.public_repos }</Text>
    </View>)
}

const ItemsList = (users) => users.map((u, i) => Item(u, i))

const github = 'https://api.github.com'
const opts = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}
const params = '&sort=repositories&order=desc&page=1&per_page=5'

export default class App extends React.Component {
  state = { users: [] }

  change = async (username) => {
    if (username) {
      const res = await fetch(`${github}/search/users?q=${username}${params}`, opts)
      const body = await res.json()
      const usersDetails = await Promise.all(
        body.items.map(i => fetch(`${github}/users/${i.login}`, opts)))
      const users = await Promise.all(usersDetails.map(r => r.json()))
      this.setState({ users: users })
    }
  }

  render = () => {
    console.log(this.state.users)
    return (<View style={ styles.container }>
      <View style={{height: 25}} />
      <SearchBox onChange={ this.change }/>
      <View style={{flex: 7, backgroundColor: 'skyblue'}}>
        { ItemsList(this.state.users) }
      </View>
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  itemText: {
    fontSize: 24,
    marginLeft: 20,
  }
})
