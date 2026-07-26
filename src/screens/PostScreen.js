import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';

export default function PostScreen({ route, navigation }) {
  const { postId } = route.params || {};
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Post {postId}</Text>
      <Text style={{ marginTop: 8 }}>Comments and details will appear here.</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
