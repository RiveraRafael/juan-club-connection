
import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './StyleSheets/styles';
import { saveButtonClick_setState } from './saveButtonSlice';
import { connect } from 'react-redux';

const saveButton = ( props ) => {
    const handleClick = () => {
        props.setSaveButtonState(true);
        props.onClick();
    };
  
    return (
      <View style={styles.buttonView}>
        <Button title="Save" onPress={handleClick} style={styles.button} />
        {props.buttonState && <Text>Saved connection</Text>}
      </View>
    );
  };

  
function mapStateToProps (state) {
    return {buttonState: state.save.value}
}

function mapDispatchToProps (dispatch) {
    return {
        setSaveButtonState: (text) => dispatch(saveButtonClick_setState(text))
    };
}

export const SaveButton = connect(mapStateToProps, mapDispatchToProps)(saveButton);