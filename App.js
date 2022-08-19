import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import Task from "./Components/Tasks";

import { useState } from "react";


export default function App() {

  const [tasks, setTasks] = useState([]);

  const [taskList, setTaskList] = useState([]);



  const handleTask = () => {
    // KeyboardA.dissmiss();
    setTaskList([...taskList, tasks]);
    setTasks(null);
  }

  const handleDelete = (index) => {
      let deleteTask = [...taskList];
      deleteTask.splice(index, 1);
      setTaskList(deleteTask);
    }


  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitles}>Today's Tasks!</Text>

        <View style={styles.tasks}>
        {
          taskList.map((task, index) => {
            return (
              <TouchableOpacity
              onPress={() => handleDelete(index)}
              key={index}
              >
            <Task
              task={task}
              handleTask={handleTask}
              />
              </TouchableOpacity>
            );qqq
              
              
              })

        }
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTask}
      >
        <TextInput style={styles.input} placeholder = {"Write your Task!"}
        value={tasks}
        onChangeText={text => setTasks(text)}
        />
        <TouchableOpacity 
        onPress={() => handleTask()}
        style={styles.button}>
          <View style={styles.addWrapper}>
            <Text style={styles.add}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f2937",
  },

  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitles: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  tasks: {
    marginTop: 20,
  },
  writeTask: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },


});
