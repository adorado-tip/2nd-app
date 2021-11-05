import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView  } from 'react-native';
import Header from "./components/Header"

export default function App() {
  const [tasks, setTasks] = useState([
      {"task":"HTML I","done":true, "id": "1"},
      {"task":"CSS","done":true, "id": "2"},
      {"task":"Responsive design","done":true, "id": "3"},
      {"task":"Git","done":true, "id": "4"},
      {"task":"JavaScript I","done":true, "id": "5"},
      {"task":"JavaScript II","done":false, "id": "6"}
  ])
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <View style={styles.list}>
        <FlatList
          data={tasks}
          renderItem={({item}) => (
            <Text>{item.task}</Text>
          )}
        />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 30
  },
  list: {
    marginTop: 30
  }
});
