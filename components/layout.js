import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import SearchBox from './search-box'
import UsersList from './users-list'
import { getUser, searchUsers } from '../js/actions/users'

class Layout extends React.Component {
  state = { loadingDetails: false }

  loadDetails = (propsState) => {
    if (propsState.users.length > 0 && !this.state.loadingDetails) {
      this.setState({ loadingDetails: true })
      const promises = propsState.users
        .map(user => {
          const action = getUser(user.login)
          this.props.dispatch(action)
          return action.payload
        })
      Promise.all(promises).then(() =>
        this.setState({ loadingDetails: false }))
    }
  }

  componentWillReceiveProps = this.loadDetails

  change = (username) => {
    if (username) {
      this.props.dispatch(searchUsers(username))
    }
  }

  render = () => (
    <View style={ styles.container }>
      <View style={{height: 25}} />
      <SearchBox onChange={ this.change }/>
      <View style={{flex: 7, backgroundColor: 'skyblue'}}>
        <UsersList users={ this.props.users } />
      </View>
    </View>
  )
}

const mapToProps = (store) => ({ users: store.users })
export default connect(mapToProps)(Layout)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
