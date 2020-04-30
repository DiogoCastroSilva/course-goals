import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Modal
  } from 'react-native';

const Input = ({ placeholder, submit, isVisible = false, onCancel }) => {
    const [text, setText] = useState('');

    const inputHandler = (value) => {
        setText(value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        submit(text);
        setText('');
    }

    return (
        <Modal visible={isVisible}>
            <View style={styles.inputContainer}>
                <TextInput 
                        placeholder={placeholder}
                        style={styles.input}
                        onChangeText={inputHandler}
                        value={text}
                />
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Button title="Cancel" color="red" onPress={onCancel} />
                    </View>
                    <View style={styles.btn}>
                        <Button title="Add" onPress={onSubmit} />
                    </View>
                </View>
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
    },
    btnContainer: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between'
    },
    btn: {
        width: '40%'
    }
  });

export default Input;