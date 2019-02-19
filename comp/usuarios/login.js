import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
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
  buttonContainer: {
    height: 40,
    width: '90%',
    alignContent: 'center',
    backgroundColor: 'green',
    marginBottom: 15,
    alignItems: 'center',
    padding: 10
  }
})

export default Login