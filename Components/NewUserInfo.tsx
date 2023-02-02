import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';

import { userStateNew } from './Store';
const NewUserInfo = () => {
  const user = useRecoilValue(userStateNew);
  console.log('====================================');
  console.log(user);
  console.log('====================================');
  return (
    <View>
      <Text style={styles.TextStyle}>{user.userId}</Text>
      <Text style={styles.TextStyle}>{user.name}</Text>
      <Text style={styles.TextStyle}>{user.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 20,
    color: 'blue',
  },
});
export default NewUserInfo;
