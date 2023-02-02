import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { userState } from './Store';
const UserInfoShow = () => {
  const user = useRecoilValue(userState);
  return (
    <View>
      <Text style={styles.TextStyle}>{user.userId}</Text>
      <Text style={styles.TextStyle}>{user.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 20,
    color: 'red',
  },
});
export default UserInfoShow;
