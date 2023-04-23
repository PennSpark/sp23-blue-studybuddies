import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native-web';
import Headers from '../Components/Home/Headers';
import Post from '../Components/Home/Post';
import { POSTS } from '../data/posts';
import { db } from '../firebase';

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collectionGroup('posts')
      .onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(post => ({ id: post.id, ...post.data() })))
    })
  }, []);

  
  return (
    <SafeAreaView style={styles.container}>
      <Headers navigation={navigation} />
      <ScrollView>
        {
          posts.map((post, index) => (
            <Post post={post} key={index} />
          ))
        }
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
