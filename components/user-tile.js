import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { getUser } from '../js/actions/users'

export default class UserTile extends React.Component {
  componentWillReceiveProps = (newProps) => {
    const user = this.props.user
    if (user && user.login && user.public_repos === undefined) {
      this.props.dispatch(getUser(user.login))
    }
  }

  render = () => {
    const user = this.props.user || {}
    return (
      <View style={ styles.item }>
        <Text style={ styles.itemText }>{ user.login }</Text>
        <Text style={ styles.itemText }>{ user.public_repos }</Text>
      </View>)
  }
}

const styles = StyleSheet.create({
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
