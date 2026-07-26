import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default function PostCard({ post, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 12, borderBottomWidth: 1, borderColor: '#eee' }}>
      <Text style={{ fontWeight: '600' }}>{post.author}</Text>
      <Text style={{ marginTop: 6 }}>{post.content}</Text>
      {post.verse ? <Text style={{ marginTop: 6, color: '#444' }}>{post.verse}</Text> : null}
    </TouchableOpacity>
  );
}
