import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from './Store';
import UserInfoShow from './UserInfoShow';
import NewUserInfo from './NewUserInfo';
const HomeScreen = () => {
  const [user, setUser] = useRecoilState(userState);
  console.log('====================================');
  console.log('user');
  console.log('====================================');
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>{user.userId}</Text>
      <Text>{user.name}</Text>
      <Button
        title='Change name'
        onPress={() => {
          setUser({
            ...user,
            name: 'MD Younis Rahman',
          });
        }}
      />
      <UserInfoShow />
      <NewUserInfo />
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
