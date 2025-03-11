import { Image, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Pressable, TextInput } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export default function HomeScreen() {
  const [task, setTask] = useState('')

  const data = [
    {
      id: 1,
      title: 'title 1'
    },
    {
      id: 2,
      title: 'title 2'
    },
    {
      id: 3,
      title: 'title 3'
    },
  ]

  const addTodo = () => {
    setTask([{ id: newId, title: task }, ..task])

    // axios
    //     .post(baseUrl +
    //       'tasks/create-task', {task})
    //     .then((response) => {
    //       setData(response.data);
    //     });
  }

  const deleteTodo = () => {
    setTask(task.filter((task: { id: any; }) => task.id !== id))

    // axios
    //     .post(baseUrl +
    //       'tasks/delete-task/:id', {task})
    //     .then((response) => {
    //       setData(response.data);
    //     });
  }
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={{ uri: 'https://media.istockphoto.com/id/1285308242/photo/to-do-list-text-on-notepad.jpg?s=612x612&w=0&k=20&c=p85bCVQZwvkrqqqNOJGg2QuPDu6ynTlQHkASQOTELh8=' }}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <SafeAreaView style={styles.container}>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a New Task"
            placeholderTextColor={"black"}
            value={task}
          />
          <Pressable
            style={styles.addButton}>
            <Text style={styles.addButtonText} onPress={addTodo}>Add</Text>
          </Pressable>
        </View>
        <FlatList data={data} renderItem={data}
          keyExtractor={data => data.id}
          contentContainerStyle={{ flexGrow: 1 }}
          onPress={deleteTask}>
        </FlatList>
      </SafeAreaView>
    </ParallaxScrollView >
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: "gray"
  },
  inputcontainer: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 3,
    width: "100%",
    marginHorizontal: 'auto',
    pointerEvents: 'auto',
  },
  totoItem: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 3,
    width: "100%",
    marginHorizontal: 'auto',
    pointerEvents: 'auto',
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
    color: 'white',
    alignItems: "center",
    width: '95%'
  },
  tototitle: {
    flex: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
    color: 'white',
    alignItems: "center",
    width: '95%'
  },
  addButtonText: {
    fontSize: 14,
    color: "black",
  },
  addButton: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginLeft: 5
  },
});
