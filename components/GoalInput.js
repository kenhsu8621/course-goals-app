import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course Goal"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.addButton}>
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    </View>

  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
    borderRadius: 8
  },
  addButton: {
    borderRadius: 8,
  },
})