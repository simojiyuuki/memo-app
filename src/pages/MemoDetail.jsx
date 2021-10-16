import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Layout from '../components/templates/Layout';

const editTypes = {
  name: 'edit',
  size: 50,
  color: '#467fd3',
};

const MemoDetail = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <_MemoHeader>
        <_MemoItemTitle>買い物リスト</_MemoItemTitle>
        <_MemoItemDate>2021年10月10日</_MemoItemDate>
      </_MemoHeader>
      <_MemoScrollView>
        <_MomoText>
          買い物リスト 書体やレイアウトなどを確認するために用います。
          本文用なので使い方を間違えると不自然に見えることもありますので要注意。
          カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。
          なお、組見本の「組」とは文字組のことです。
          活字印刷時代の用語だったと思います。
          このダミーテキストは自由に改変することが出来ます。
          主に書籍やウェブページなどのデザインを作成する時によく使われます。
          書体やレイアウトなどを確認するために用います。
          トはダミー文書やダミー文章とも呼ばれることがあります。
          カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。
          主に書籍やウェブページなどのデザインを作成する時によく使われます。
          これは正式な文章の代わりに入れて使うダミーテキストです。
        </_MomoText>
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
