import React from 'react'
import { connect } from 'react-redux'
import UserTile from './user-tile'

export default class UsersList extends React.Component {
  render = () => this.props.users
    .map((user, key) => <UserTile user={ user } key={ key } />)
}
