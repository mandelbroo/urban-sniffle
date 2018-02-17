import React from 'react'
import { Provider } from 'react-redux'
import Layout from './components/layout'
import store from './js/store'

export default class App extends React.Component {
  render = () => {
    return (
      <Provider store={ store }>
        <Layout />
      </Provider>
    )
  }
}
