import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button
  } from 'react-native';

const Input = ({placeholder, inputHandler, value, submit}) => {
    return (
        <View style={styles.inputContainer}>
              <TextInput 
                    placeholder={placeholder}
                    style={styles.input}
                    onChangeText={inputHandler}
                    value={value}
                />
              <Button title='Add' onPress={submit} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    input: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10
    }
  });

export default Input;