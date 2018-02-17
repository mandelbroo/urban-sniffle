import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import SearchBox from './search-box'
import UsersList from './users-list'
import { searchUsers } from '../js/actions/users'

class Layout extends React.Component {
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
