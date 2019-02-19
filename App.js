import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import Blink from './comp/blink'
import Login from './comp/usuarios/login'
import Pedido from './comp/usuarios/pedido'
import Empresa from './comp/empresas/empresa'
import Producto from './comp/productos/producto'

export default class LoginApp extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <Login />
          <Empresa />
          <Producto />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    alignContent: 'flex-start'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);