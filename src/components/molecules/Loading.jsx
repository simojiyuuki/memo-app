import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { bool } from 'prop-types';

const Loading = ({ isLoding }) => {
  if (!isLoding) {
    return null;
  }

  return (
    <_LoadingContainer>
      <View>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    </_LoadingContainer>
  );
};

Loading.propTypes = {
  isLoding: bool,
};

Loading.defaultProps = {
  isLoding: false,
};

const _LoadingContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 5;
`;

export default Loading;
