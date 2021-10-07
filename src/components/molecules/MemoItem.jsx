import React from 'react';
import { View, Alert } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import CloseButton from '../atoms/CloseButton';

const MemoItem = ({ title, createDate }) => {
  const navigation = useNavigation();

  return (
    <_MemoItem onPress={() => navigation.navigate('MemoDetail')}>
      <View>
        <_MemoItemTitle>{title}</_MemoItemTitle>
        <_MemoItemDate>{createDate}</_MemoItemDate>
      </View>
      <CloseButton onPress={() => Alert.alert('削除')} />
    </_MemoItem>
  );
};

MemoItem.propTypes = {
  title: PropTypes.string.isRequired,
  createDate: PropTypes.string.isRequired,
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
