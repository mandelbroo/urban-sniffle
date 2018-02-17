import React from 'react'
import { connect } from 'react-redux'
import UserTile from './user-tile'

class UsersList extends React.Component {
  render = () =>
    this.props.users.map((user, index) =>
      <UserTile user={ user } key={ index } dispatch={ this.props.dispatch }/>)
}

const mapToProps = (store) => ({ users: store.users })
export default connect(mapToProps)(UsersList)
