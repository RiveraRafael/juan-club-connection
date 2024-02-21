
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {
 
  const [connection, setConnection] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const savedConnection = await AsyncStorage.getItem('connection');
      const savedNumber = await AsyncStorage.getItem('number');
      if (savedConnection !== null) {
        setConnection(savedConnection);
      }
      if (savedNumber !== null) {
        setNumber(savedNumber);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleConnectionChange = (text) => {
    setConnection(text);
  };

  const handleNumberChange = (text) => {
    setNumber(text);
  };

  const handleSave = () => {
    saveData();
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('connection', connection);
      await AsyncStorage.setItem('number', number);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Club Connection</Text>
      <FormField label="connect method:" value={connection} onChangeText={handleConnectionChange} secureTextEntry/>
      <FormField label="number:" value={number} onChangeText={handleNumberChange} keyboardType="numeric" />
      <MessageButton label="Save" message="Connection saved" onPress={handleSave} />
    </View>
  );

};

const FormField = ({ label, value, onChangeText, secureTextEntry, keyboardType }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry} 
        keyboardType={keyboardType}
      />
    </View>
  );
};

const MessageButton = ( {label, message, onPress} ) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onPress(true);
  };

  return (
    <View style={styles.buttonView}>
      <Button title={label} onPress={handleClick} style={styles.button} />
      {clicked && <Text>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
  },
  label: {
    flex: 2,
    fontSize: 16,
    textAlign: 'left',
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 12,
    paddingBottom: 12,
  },
  buttonView: {
    flex: 1,
    paddingTop: 30,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
