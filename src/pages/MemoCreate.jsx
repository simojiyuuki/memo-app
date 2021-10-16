import React, { useState } from 'react';
import { BackHandler, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import Layout from '../components/templates/Layout';

const editTypes = {
  name: 'edit',
  size: 50,
  color: '#467fd3',
};

const MemoCreate = () => {
  const navigation = useNavigation();
  const [bodyText, setBodyText] = useState();

  const handlePress = () => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);

    ref
      .add({
        bodyText,
        updatedAt: new Date(),
      })
      .then((docRef) => {
        console.log('Created!', docRef.id);
        if (navigation.canGoBack()) navigation.goBack();
        else BackHandler.exitApp();
      })
      .catch((error) => {
        console.log('Error!', error);
      });
  };

  return (
    <Layout>
      <_MemoInputContainer>
        <_MemoInput
          style={styles.input}
          value={bodyText}
          multiline
          onChangeText={(text) => {
            setBodyText(text);
          }}
          autoFocus
        />
      </_MemoInputContainer>
      <$EditButton
        name={editTypes.name}
        size={editTypes.size}
        color={editTypes.color}
        onPress={handlePress}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    textAlignVertical: 'top',
  },
});

const _MemoInputContainer = styled.View`
  padding: 32px 37px;
  flex: 1;
`;

const _MemoInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  line-height: 24px;
`;

const $EditButton = styled(Icon)`
  position: absolute;
  right: 40px;
  top: 30px;
`;

export default MemoCreate;
