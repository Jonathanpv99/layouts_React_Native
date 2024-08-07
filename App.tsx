import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

function App(): React.JSX.Element {
  
  return (
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.banner} source={require('./assets/img/bg.jpg')} />
      </View>

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>¿Qué Hacer en Paris?</Text>

        <ScrollView horizontal={true}>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad1.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad2.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad3.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad4.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad5.jpg')}
            />
          </View>
        </ScrollView>

        <Text style={styles.titulo}>Los Mejores Alojamientos</Text>
        <View>
          <View>
            <View>
              <Image
                style={styles.destinos}
                source={require('./assets/img/mejores1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.destinos}
                source={require('./assets/img/mejores2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.destinos}
                source={require('./assets/img/mejores3.jpg')}
              />
            </View>
          </View>
        </View>

        <Text style={styles.titulo}>Hospedajes en L.A.</Text>

        <View style={styles.listado}>
          <View style={styles.listadoItem}>
            <Image
              style={styles.destinos}
              source={require('./assets/img/hospedaje1.jpg')}
            />
            <Text>Casa 1.</Text>
          </View>
          <View style={styles.listadoItem}>
            <Image
              style={styles.destinos}
              source={require('./assets/img/hospedaje2.jpg')}
            />
            <Text>Casa 2.</Text>
          </View>
          <View style={styles.listadoItem}>
            <Image
              style={styles.destinos}
              source={require('./assets/img/hospedaje3.jpg')}
            />
            <Text>Casa 3.</Text>
          </View>
          <View style={styles.listadoItem}>
            <Image
              style={styles.destinos}
              source={require('./assets/img/hospedaje4.jpg')}
            />
            <Text>Casa 4.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 230,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24, 
    marginVertical: 20,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  destinos: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  listadoItem: {
    flexBasis: '49%',
  }
});

export default App;
