import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (text) => {
    setGoal(text);
  };

  const addGoal = () => {
    setGoals(currentGoals => [...currentGoals, { key: Math.random().toString() , value: goal }]);
  };

  return (
    <View style={styles.screen}>
        <View style={styles.inputContainer}>
              <TextInput 
                placeholder='Course Goals'
                style={styles.input}
                onChangeText={goalInputHandler}
                value={goal} />
              
              <Button title='Add' onPress={addGoal} />
        </View>
        <FlatList
          data={goals}
          renderItem={itemData => (
            <View key={itemData.item.key} style={styles.goalItem}>
                <Text>{itemData.item.value}</Text>
            </View>
        )} />
      {/* <ScrollView style={styles.goalItems}>
          {goals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text>{goal}</Text>
            </View>
          ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
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
  },
  goalItems: {
    
  },
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1

  }
});