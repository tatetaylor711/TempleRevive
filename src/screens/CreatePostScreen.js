import React, { useState } from 'react';
import { View, TextInput, Button, SafeAreaView, Text } from 'react-native';

export default function CreatePostScreen({ navigation }) {
  const [content, setContent] = useState('');
  const [verseRef, setVerseRef] = useState('');

  const createPost = () => {
    // TODO: wire to Firestore / backend
    console.log('Create post', { content, verseRef });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ marginBottom: 8 }}>Write a post</Text>
      <TextInput
        placeholder="Share an update, encouragement, or prayer request"
        value={content}
        onChangeText={setContent}
        multiline
        style={{ height: 120, borderColor: '#ccc', borderWidth: 1, padding: 8, marginBottom: 12 }}
      />
      <TextInput
        placeholder="Optional verse (e.g. John 3:16)"
        value={verseRef}
        onChangeText={setVerseRef}
        style={{ height: 40, borderColor: '#ccc', borderWidth: 1, padding: 8, marginBottom: 12 }}
      />
      <Button title="Post" onPress={createPost} />
    </SafeAreaView>
  );
}
