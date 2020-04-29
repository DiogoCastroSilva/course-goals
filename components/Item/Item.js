import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';

const Item = ({item, press}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={(e) => press(e)}>
            <View
                key={item.key}
                style={styles.goalItem}>
                <Text>{item.value}</Text>
            </View>
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    goalItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});
export default Item;