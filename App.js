
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { loadData , saveData } from './DataHandler/DataHandler';
import styles from './StyleSheets/styles';
import { connect } from 'react-redux';
import { NumberInput, ConnectionInput } from './FormField';
import { SaveButton } from './saveButton';
import { saveButtonClick_setState } from './saveButtonSlice';
import { connection_setValue } from './connectionSlice'
import { number_setValue } from './numberSlice';

const mapStateToProps = (state) => {
  return {
    connection: state.connection.value,
    number: state.number.value,
    save: state.save.value,
    buttonState: state.save.value
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setButtonClicked: (text) => dispatch(saveButtonClick_setState(text)),
    setSaveButtonState: (text) => dispatch(saveButtonClick_setState(text)),
    setNumber: (text) => dispatch(number_setValue(text)),
    setConnection: (text) => dispatch(connection_setValue(text))
  };
}

const App = ( props ) => {

  useEffect( () => {
    const handleLoad = async () => {
      const data = await loadData();
      props.setNumber(data.number);
      props.setConnection(data.connection);
    };
    handleLoad();
  }, []);

  const ConnectionProps = {
    label: "Connection",
    secureTextEntry: true,
    keyboardType: "default"
  }
  
  const NumberProps = {
    label: "Number",
    secureTextEntry: false,
    keyboardType: "numeric"
  }

  const handleButtonClick = () => {
    const saveProps = {
      connection: props.connection,
      number: props.number
    }
    saveData(saveProps);
  }

  const ButtonProps = {
    onClick: handleButtonClick
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Club Connection</Text>
      <ConnectionInput {...ConnectionProps} />
      <NumberInput {...NumberProps} />
      <SaveButton {...ButtonProps} />
    </View>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
