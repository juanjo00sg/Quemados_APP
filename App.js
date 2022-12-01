import React, {useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
} from 'react-native';
import {Form} from './src/componentes/Form';

import {Colors} from 'react-native/Libraries/NewAppScreen';
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(modalVisible);
  const newUser = () => {
    console.log('Diste click en crear usuario');    
  };
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <View style={backgroundStyle}>
      <Text style={styles.sectionTitle}>
        App de Quemados{''}
        <Text style={styles.sectionTitleBold}>UAM</Text>
      </Text>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.btnNuevoUsuario}>
        <Text style={styles.btnTxtNuevoUsuario}>Nueva Cita</Text>
      </Pressable>
      <Form modalVisible={modalVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 30,
    color: '#374151',
    fontWeight: 600,
  },
  sectionTitleBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNuevoUsuario: {
    backgroundColor: '#6D28D9',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTxtNuevoUsuario: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});

export default App;
