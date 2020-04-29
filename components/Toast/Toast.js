import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Button,
    Text
} from 'react-native';

const Toast = ({undo, text}) => {
    return (
        <View style={styles.toast}>
            <View style={styles.toastContainer}>
                <Text style={{color: '#fff'}}>
                    {text}
                </Text>
                {undo &&
                    <Text style={{color: '#FFC726'}} onPress={undo}>
                        Undo
                    </Text>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    toast: {
        width: '100%', 
        height: 40, 
        backgroundColor: '#4A5050', 
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: '2%'
      },
    toastContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default Toast;