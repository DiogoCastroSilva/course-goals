import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import Item from './components/Item/Item';
import Input from './components/Input/Input';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (text) => {
    setGoal(text);
  };

  const addGoal = () => {
    setGoals(currentGoals => [
        ...currentGoals,
        { key: Math.random().toString() , value: goal }
    ]);
  };

  const deleteGoal = key => {
    console.log(key);
    setGoals(currentGoals =>
      currentGoals.filter(goal => goal.key !== key));
  };

  return (
    <View style={styles.screen}>
        <Input
            placeholder="Course Goal"
            value={goal}
            inputHandler={goalInputHandler}
            submit={addGoal}
        />
        <FlatList
            data={goals}
            renderItem={itemData => (
                <Item
                  item={itemData.item}
                  press={() => deleteGoal(itemData.item.key)} />
            )}
        />
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
    
  }
});