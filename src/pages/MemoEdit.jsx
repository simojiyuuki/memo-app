import React, { useState } from 'react';
import { BackHandler, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import firebase from 'firebase';
import Layout from '../components/templates/Layout';

const editTypes = {
  name: 'edit',
  size: 50,
  color: '#467fd3',
};

const MemoEdit = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);

  const handlePress = () => {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref
        .set({
          bodyText: body,
          updatedAt: new Date(),
        })
        .then(() => {
          if (navigation.canGoBack()) navigation.goBack();
          else BackHandler.exitApp();
        })
        .catch((error) => {
          console.log('Error!', error);
        });
    }
  };

  return (
    <Layout>
      <_MemoInputContainer>
        <_MemoInput
          style={styles.input}
          value={body}
          onChangeText={(text) => {
            setBody(text);
          }}
          multiline
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
  /* height: 100%; */
  /* background-color: pink; */
  flex: 1;
`;

const _MemoInput = styled.TextInput`
  /* background-color: blue; */
  flex: 1;
  font-size: 16px;
  line-height: 24px;
`;

const $EditButton = styled(Icon)`
  position: absolute;
  right: 40px;
  top: 30px;
`;

export default MemoEdit;
