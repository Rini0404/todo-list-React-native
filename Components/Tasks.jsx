import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  // pass in the task as a prop
  const { task, deleteTask } = props;
  
  return (
    <View style={styles.task}>
      <View style={styles.itemLeft}>
        {/* give a sqaure  */}
        <View style={styles.square}></View>
        <Text style={styles.taskText}>{props.task}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
 

  taskText: {
    fontSize: 20,
    color: "#333",
  },
  itemLeft: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
    square: {
    // show a squre in the left side of the taskText
    width: 24,
    height: 24,
    backgroundColor: "blue",
    marginRight: 15,
    opacity: 0.5,
    borderRadius: 5,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 5,
    backgroundColor: "transparent",
    borderWidth: 2,
    marginRight: 10,
  },

});

export default Task;
