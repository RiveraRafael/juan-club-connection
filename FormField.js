
import React from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './StyleSheets/styles';
import { setValue } from './reducers';
import { connect, useSelector, useDispatch } from 'react-redux';
import { setConnectionInputValue, setNumberInputValue } from './actions';
import { connection_setValue } from './connectionSlice';
import { number_setValue } from './numberSlice';

const FormField = (props) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        value={props.textInputValue }
        onChangeText={(text) => props.setTextInputValue(text)}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
 );
};

function connection_mapStateToProps (state) {
  return {textInputValue: state.connection.value}
}

function connection_mapDispatchToProps (dispatch) {
  return {
    setTextInputValue: (text) => dispatch(connection_setValue(text))
  };
}

function number_mapStateToProps (state) {
  return {textInputValue: state.number.value}
}

function number_mapDispatchToProps (dispatch) {
  return {
    setTextInputValue: (text) => dispatch(number_setValue(text))
  };
}

export const ConnectionInput = connect(connection_mapStateToProps, connection_mapDispatchToProps)(FormField);
export const NumberInput = connect(number_mapStateToProps, number_mapDispatchToProps)(FormField);