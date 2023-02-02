import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { userState } from './Store';
const HomeScreen = () => {
  const [user, setUser] = useRecoilState(userState);
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>{user.userId}</Text>
      <Text>{user.name}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
