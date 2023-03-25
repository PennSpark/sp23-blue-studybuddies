import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {



  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // fetch('http://127.0.0.1:8000/posts/')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setPosts(data);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
    axios.get("http://127.0.0.1:8000/posts/")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView>
      {posts.map((post) => {
        return (
          <Text>{post.title} {post.course} {post.location} </Text>
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
