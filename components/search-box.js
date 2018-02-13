import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default class SearchBox extends React.Component {
  state = { value: '' }

  change = (text) => this.setState({ value: text })

  click = () => this.props.onChange(this.state.value)

  get button() { return this.props.onChange
    ? <Button onPress={ this.click } title='Find' /> : ''
  }

  render = () => (
    <View style={ styles.wrapper }>
      <Text style={ styles.icon }>🔍</Text>
      <TextInput style={ styles.input } onChangeText={ this.change }
        placeholder='Username' />
      { this.button }
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  }
})
