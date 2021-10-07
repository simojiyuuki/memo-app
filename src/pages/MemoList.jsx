import React from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import MemoItem from '../components/molecules/MemoItem';
import Layout from '../components/templates/Layout';

const mockMemoList = [
  {
    id: 1,
    title: 'React1',
    createDate: '2021年10月1日',
  },
  {
    id: 2,
    title: 'React2',
    createDate: '2021年10月1日',
  },
  {
    id: 3,
    title: 'React3',
    createDate: '2021年10月1日',
  },
  {
    id: 4,
    title: 'React4',
    createDate: '2021年10月1日',
  },
  {
    id: 5,
    title: 'React5',
    createDate: '2021年10月1日',
  },
  {
    id: 6,
    title: 'React6',
    createDate: '2021年10月1日',
  },
  {
    id: 7,
    title: 'React7',
    createDate: '2021年10月1日',
  },
  {
    id: 8,
    title: 'React8',
    createDate: '2021年10月1日',
  },
  {
    id: 9,
    title: 'React9',
    createDate: '2021年10月1日',
  },
  {
    id: 10,
    title: 'React10',
    createDate: '2021年10月1日',
  },
];

const circleTypes = {
  name: 'pluscircle',
  size: 50,
  color: '#467fd3',
};

const MemoList = (props) => {
  const { navigation } = props;

  return (
    <Layout>
      <ScrollView>
        <View>
          {/* メモ一覧表示 */}
          {mockMemoList.map((item) => (
            <MemoItem
              key={item.id}
              title={item.title}
              createDate={item.createDate}
            />
          ))}
        </View>
      </ScrollView>
      {/* メモ追加ボタン */}
      <$CircleButton
        name={circleTypes.name}
        size={circleTypes.size}
        color={circleTypes.color}
        onPress={() => navigation.navigate('MemoCreate')}
      />
    </Layout>
  );
};

const $CircleButton = styled(Icon)`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

export default MemoList;
