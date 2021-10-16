import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import firebase from 'firebase';
import { Alert } from 'react-native';
import Layout from '../components/templates/Layout';
import { getNowDateWithString } from '../utils/DateUtil';

const editTypes = {
  name: 'edit',
  size: 50,
  color: '#467fd3',
};

const MemoDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const unsubscribe = () => {};

    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref.onSnapshot((doc) => {
        console.log(doc.id, doc.data());
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }

    return unsubscribe;
  }, []);

  return (
    <Layout>
      <_MemoHeader>
        <_MemoItemTitle numberOfLines={1}>
          {memo && memo.bodyText}
        </_MemoItemTitle>
        <_MemoItemDate>
          {memo && getNowDateWithString(memo.updatedAt)}
        </_MemoItemDate>
      </_MemoHeader>
      <_MemoScrollView>
        <_MomoText>{memo && memo.bodyText}</_MomoText>
      </_MemoScrollView>
      <$EditButton
        name={editTypes.name}
        size={editTypes.size}
        color={editTypes.color}
        onPress={() => navigation.navigate('MemoEdit')}
      />
    </Layout>
  );
};

const _MemoHeader = styled.View`
  background-color: #467fd3;
  height: 96px;
  width: 100%;
  justify-content: center;
  padding: 24px 19px;
`;

const _MemoItemTitle = styled.Text`
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
  color: #ffffff;
`;

const _MemoItemDate = styled.Text`
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
`;

const _MemoScrollView = styled.ScrollView`
  padding: 32px 37px;
`;

const _MomoText = styled.Text`
  font-size: 16px;
  line-height: 24px;
`;

const $EditButton = styled(Icon)`
  position: absolute;
  right: 40px;
  bottom: 30px;
`;

export default MemoDetail;
