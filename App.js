import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Blink from './comp/blink'
import Login from './comp/usuarios/login'

export default class LoginApp extends Component {
  render() {
    return (
      <Login text='algo' />
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);