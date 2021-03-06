import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  Text
} from 'react-native';
import Item from './components/Item/Item';
import Input from './components/Input/Input';
import Toast from './components/Toast/Toast';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setAddMode] = useState(false);
  const [isToastVisible, setToastVisibility] = useState(false);
  const [undoTime, setUndoTime] = useState(null);


  const addGoal = (goal) => {
    if (goal && goal.length > 0) {
      closeModal();
      setGoals(currentGoals => [
          ...currentGoals,
          { key: Math.random().toString() , value: goal }
      ]);
    }
  };

  const closeModal = () => {
    setAddMode(false);
  };

  const deleteGoal = key => {
    setToastVisibility(true);
    setUndoTime(setTimeout(() => {
      setToastVisibility(false);
      setGoals(currentGoals =>
        currentGoals.filter(goal => goal.key !== key));
      setUndoTime(null);
    }, 3000));
  };

  const undoDelete = () => {
    setToastVisibility(false);
    setUndoTime(clearTimeout(undoTime));
  };

  return (
    <View style={styles.screen}>
        <Button
          title="Add New Goal"
          onPress={() => setAddMode(true)}
        />
        <Input
            placeholder="Course Goal"
            submit={addGoal}
            isVisible={isAddMode}
            onCancel={closeModal}
        />
        <FlatList
            data={goals}
            renderItem={itemData => (
                <Item
                  item={itemData.item}
                  press={() => deleteGoal(itemData.item.key)} />
            )}
        />
        {isToastVisible && 
          <Toast undo={undoDelete} text="Removed Successfully" />
        }
    </View>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
    marginHorizontal: 20,
    flex: 1
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