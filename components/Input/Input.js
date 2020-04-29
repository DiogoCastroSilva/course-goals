import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Modal
  } from 'react-native';

const Input = ({placeholder, inputHandler, value, submit, isVisible = false}) => {
    return (
        <Modal visible={isVisible}>
            <View style={styles.inputContainer}>
                <TextInput 
                        placeholder={placeholder}
                        style={styles.input}
                        onChangeText={inputHandler}
                        value={value}
                    />
                <Button title='Add' onPress={submit} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      marginBottom: 10
    }
  });

export default Input;