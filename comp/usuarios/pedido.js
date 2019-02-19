import React, { Component } from 'react'
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Picker
} from 'react-native'

class Pedido extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <TextInput
          style={ styles.input }
          placeholder="Empresa"
        />
        <Picker
          style={{ height: 50, width: 100 }}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    marginLeft: '5%',
    height: '40%'
  },
  input: {
    height: 40,
    width: '90%',
    alignContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    marginBottom: 10,
    padding: 10,
  },
})

export default Pedido