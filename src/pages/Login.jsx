import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import firebase from 'firebase';
import Layout from '../components/templates/Layout';

const Login = () => {
  const navigation = useNavigation();
  const [isLoginView, setLoginView] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const memoListScreen = 'MemoList';

  const changeLoginMode = () => {
    setLoginView(!isLoginView);
  };

  const screenTransition = (screen) => {
    navigation.reset({
      index: 0,
      routes: [{ name: screen }],
    });
  };

  const siginUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        screenTransition(memoListScreen);
      })
      .catch((error) => {
        console.log(error.code, error.message);
        Alert.alert(error.code);
      });
  };

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        screenTransition(memoListScreen);
      })
      .catch((error) => {
        console.log(error.code, error.message);
        Alert.alert(error.code);
      });
  };

  const handlePress = () => (isLoginView ? login() : siginUp());

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        screenTransition(memoListScreen);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Layout>
      <_Inner>
        <_LoginTitle>{isLoginView ? 'Log In' : 'Sign Up'}</_LoginTitle>
        <_LoginInputText
          placeholder="Email Address"
          placeholderTextColor="#dddddd"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          keyboardType="email-address"
          textContextType="emailAddress"
        />
        <_LoginInputText
          placeholder="Password"
          placeholderTextColor="#dddddd"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry
          textContextType="password"
        />
        <_LoginButton label="Submit" onPress={handlePress}>
          <_ButtonLabel>Submit</_ButtonLabel>
        </_LoginButton>
        <_Fotter>
          <_FotterText>
            {isLoginView ? 'Not registered?' : 'Already registered?'}
          </_FotterText>
          <$FotterLink onPress={changeLoginMode}>
            {isLoginView ? 'Sign up here!' : 'Log In.'}
          </$FotterLink>
        </_Fotter>
      </_Inner>
    </Layout>
  );
};

const _Inner = styled.View`
  padding: 27px 24px;
`;

const _LoginTitle = styled.Text`
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  margin: 8px;
`;

const _LoginInputText = styled.TextInput`
  margin: 8px;
  padding: 8px;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  border-width: 1px;
  border-color: #dddddd;
  background-color: #ffffff;
`;

const _LoginButton = styled.TouchableOpacity`
  margin: 8px;
  background-color: #467fd3;
  border-radius: 4px;
  height: 48px;
  align-self: flex-start;
`;

const _ButtonLabel = styled.Text`
  font-size: 16px;
  line-height: 32px;
  color: #ffffff;
  padding: 8px 32px;
`;

const _Fotter = styled.View`
  flex-direction: row;
`;

const _FotterText = styled.Text`
  font-size: 14px;
  line-height: 24px;
  margin-right: 8px;
`;

const $FotterLink = styled(_FotterText)`
  color: #467fd3;
`;

export default Login;
