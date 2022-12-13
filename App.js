import { useState } from "react";
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setGoalList((currentGoalList) => [
      ...currentGoalList,
      // enteredGoalText
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
  }
  const deleteGoalHandler = (id) => {
    // console.log('DELETE');
    setGoalList((currentGoalList) => {
      return currentGoalList.filter((goal) => goal.id !== id)
    });
  }
  // 這個寫法為解構賦值，把itemData物件中的item抽出來，寫法較為簡潔
  // const renderItem = ({ item }) => (
  //   <View style={styles.goalItem}>
  //     <Text style={styles.goalItemText}>{item.text}</Text>
  //   </View>
  // );
  const renderItem = (itemData) => (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>{itemData.item.text}</Text>
    </View>
  )

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        {/* <ScrollView>
          {goalList.map((goal) => <View style={styles.goalItem} key={goal}><Text style={styles.goalItemText}>{goal}</Text></View>)}
        </ScrollView> */}
        <FlatList
          data={goalList}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            )
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 60,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flex: 1
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  goalsContainer: {
    flex: 5,
    padding: 8,
    backgroundColor: '#eee',
    borderBottomStartRadius: 16,
    borderRadius: 16,
  },
});
