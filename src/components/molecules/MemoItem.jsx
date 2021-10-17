import React from 'react';
import { View, Alert } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import CloseButton from '../atoms/CloseButton';
import { getNowDateWithString } from '../../utils/DateUtil';

const MemoItem = ({ id, bodyText, updatedAt }) => {
  const navigation = useNavigation();

  const deleteMemo = () => {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      Alert.alert('メモを削除します。', 'よろしいですか？', [
        {
          text: 'キャンセル',
          onPress: () => {},
        },
        {
          text: '削除する',
          style: 'destructive',
          onPress: () => {
            ref.delete().catch(() => {
              Alert.alert('削除に失敗しました。');
            });
          },
        },
      ]);
    }
  };

  return (
    <_MemoItem onPress={() => navigation.navigate('MemoDetail', { id })}>
      <View>
        <_MemoItemTitle numberOfLines={1}>{bodyText}</_MemoItemTitle>
        <_MemoItemDate>{getNowDateWithString(updatedAt)}</_MemoItemDate>
      </View>
      <CloseButton onPress={deleteMemo} />
    </_MemoItem>
  );
};

MemoItem.propTypes = {
  id: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
  updatedAt: PropTypes.instanceOf(Date).isRequired,
};

const _MemoItem = styled.TouchableOpacity`
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 19px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.15);
`;

const _MemoItemTitle = styled.Text`
  font-size: 16px;
  line-height: 32px;
  font-weight: normal;
`;

const _MemoItemDate = styled.Text`
  font-size: 12px;
  line-height: 16px;
  color: #848484;
`;

export default MemoItem;
