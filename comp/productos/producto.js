import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

class Producto extends Component {
  render() {
    return(
      <View style={ styles.productoContainer }>
        <Image
          style={ styles.imagen }
          source={{uri: 'https://blog.teamtreehouse.com/wp-content/uploads/2014/03/data-uri-feature.png'}}
        />
        <View style={ styles.insideContainer }>
          <Text>
            Nombre Producto
          </Text>
          <Text style={ styles.textoFijo }>
            lorem ipsum set ut amet, lorem ipsum set ut amet
          </Text>
          <Text>
            Precio: S/. 30.00
          </Text>
          <TouchableOpacity style={ styles.buttonPedido }>
            <Text>
              Seleccionar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    )
  }
}


const styles = StyleSheet.create({
  productoContainer: {
    height: 200,
    width: '80%',
    marginTop: 20,
    marginLeft: '10%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    alignContent: 'flex-start'
  },
  insideContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  textoFijo: {
    height: '70%',
    marginTop: '1%',
    marginLeft: '1%',
    marginRight: '1%',
    marginBottom: '2%'
  },
  buttonPedido: {
    height: 40,
    width: '90%',
    alignContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  imagen: {
    height: 200,
    width: 140,
    borderRadius: 10
  }
})

export default Producto