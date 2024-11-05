import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Making API Requests</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Click Me</Text>
    </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:70,
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
        marginHorizontal:80,

   },
  item: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    height: 'auto'
  },
  button: {
    width: 80, // Set custom width
    height: 44,  // Set custom height
    backgroundColor: '#4CAF50', // Button background color
    alignItems: 'center',       // Center text horizontally
    justifyContent: 'center',    // Center text vertically
    borderRadius: 10,      
    marginHorizontal:20,
    marginVertical: 20

   },
  buttonText: {
    color: '#FFFFFF',   // Text color
    fontSize: 16,       // Text size
    fontWeight: 'bold', // Optional: make text bold
  },
});

export default App;