import React from 'react';
import { View, Text, FlatList, Button, SafeAreaView } from 'react-native';
import PostCard from '../components/PostCard';

const SAMPLE_POSTS = [
  { id: '1', author: 'Alice', content: 'Great run today! Phil 4:13', verse: 'Philippians 4:13' },
  { id: '2', author: 'Bob', content: 'Pray for my knee recovery', verse: null },
];

export default function FeedScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title="Create Post" onPress={() => navigation.navigate('CreatePost')} />
      <FlatList
        data={SAMPLE_POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard post={item} onPress={() => navigation.navigate('Post', { postId: item.id })} />
        )}
      />
    </SafeAreaView>
  );
}
