import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthNavigation from './screens/AuthNavigation';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/posts/").then((res) => {
      setPosts(res.data)
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    });
  }, []);

  return (
    <SafeAreaView>
      {posts.map((post) => {
        return (
          <View>
            <Text>Title: {post.title}</Text>
            <Text>Course: {post.course}</Text>
            <Text>Location: {post.location}</Text>
            <Text>Description: {post.text}</Text>
            <Text>Date: {post.event_date}</Text>
            <Text>Published: {post.published_date}</Text>
            <Text></Text>
            <AuthNavigation />
          </View>
        );
      })}
    </SafeAreaView >
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
