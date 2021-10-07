import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import Layout from '../components/templates/Layout';

const editTypes = {
  name: 'edit',
  size: 50,
  color: '#467fd3',
};

const MemoCreate = (props) => {
  const { navigation } = props;

  return (
    <Layout>
      <_MemoInputContainer>
        <_MemoInput style={styles.input} value="" multiline />
      </_MemoInputContainer>
      <$EditButton
        name={editTypes.name}
        size={editTypes.size}
        color={editTypes.color}
        onPress={() => navigation.goBack()}
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
  bottom: 40px;
`;

export default MemoCreate;
