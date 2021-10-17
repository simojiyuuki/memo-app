import React, { useState, useEffect } from 'react';
import { View, Alert, FlatList } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import MemoItem from '../components/molecules/MemoItem';
import Layout from '../components/templates/Layout';
import LogoutButton from '../components/atoms/LogoutButton';
import Loading from '../components/molecules/Loading';

const circleTypes = {
  name: 'pluscircle',
  size: 50,
  color: '#467fd3',
};

const MemoList = () => {
  const navigation = useNavigation();
  const [memos, setMemos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const renderItem = ({ item }) => (
    <MemoItem
      key={item.id}
      id={item.id}
      bodyText={item.bodyText}
      updatedAt={item.updatedAt}
    />
  );

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      setLoading(true);
      const ref = db
        .collection(`users/${currentUser.uid}/memos`)
        .orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot(
        (snapshot) => {
          const userMemos = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            userMemos.push({
              id: doc.id,
              bodyText: data.bodyText,
              updatedAt: data.updatedAt.toDate(),
            });
          });
          setMemos(userMemos);
          setLoading(false);
          console.log(userMemos);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          Alert.alert('データの読み込みに失敗しました');
        }
      );
    }
    return unsubscribe;
  }, []);

  return (
    <Layout>
      <Loading isLoading={isLoading} />
      <View>
        <FlatList
          data={memos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
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
