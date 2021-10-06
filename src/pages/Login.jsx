import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Layout from '../components/templates/Layout';

const Login = () => {
  const [isLoginView, setLoginView] = useState(true);

  const changeLoginMode = () => {
    setLoginView(!isLoginView);
  };

  return (
    <Layout>
      <_Inner>
        <_LoginTitle>{isLoginView ? 'Log In' : 'Sign Up'}</_LoginTitle>
        <_InputText
          placeholder="Email Address"
          placeholderTextColor="#dddddd"
        />
        <_InputText placeholder="Password" placeholderTextColor="#dddddd" />
        <$Button label="Submit">
          <_ButtonLabel>Submit</_ButtonLabel>
        </$Button>
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
  margin-bottom: 24px;
`;

const _InputText = styled.TextInput`
  margin-bottom: 16px;
  padding: 8px;
  height: 48px;
  font-size: 16px;
  line-height: 32px;
  border-width: 1px;
  border-color: #dddddd;
  background-color: #ffffff;
`;

const $Button = styled(TouchableOpacity)`
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
  margin-bottom: 24px;
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
