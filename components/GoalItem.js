import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => (
  <View style={styles.goalItem}>
    <Pressable android_ripple={{ color: 'ddd' }} onPress={props.onDeleteItem.bind(this, props.id)} style={({ pressed }) => pressed && styles.pressedItem}>
      <Text style={styles.goalItemText}>{props.text}</Text>
    </Pressable>
  </View>
)

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#2173c9',
  },
  pressedItem: {
    opacity: 0.5
  },
  goalItemText: {
    padding: 8,
    color: '#fff'
  }
})