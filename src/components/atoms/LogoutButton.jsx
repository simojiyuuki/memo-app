import React from 'react';
import styled from 'styled-components/native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

const LogoutButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました');
      });
  };

  return (
    <_LogoutContainer onPress={handlePress}>
      <_LogoutLabel>ログアウト</_LogoutLabel>
    </_LogoutContainer>
  );
};

const _LogoutContainer = styled.TouchableOpacity`
  padding: 4px 12px;
`;

const _LogoutLabel = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
`;

export default LogoutButton;
