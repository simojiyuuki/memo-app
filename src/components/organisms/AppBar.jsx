import React from 'react';
// import { View, Text } from 'react-native';
import styled from 'styled-components/native';
// import PropTypes from 'prop-types';

const AppBar = () => (
  <_Appbar>
    {/* {isBack && <_AppbarLeft>文字列</_AppbarLeft>} */}
    <_AppbarInner>
      <_AppbarTitle>Memo App</_AppbarTitle>
    </_AppbarInner>
    <_AppbarRight>ログアウト</_AppbarRight>
  </_Appbar>
);

// AppBar.propTypes = {
//   isBack: PropTypes.bool,
// };

// AppBar.defaultProps = {
//   isBack: false,
// };

const _Appbar = styled.View`
  width: 100%;
  height: 104px;
  background-color: #467fd3;
  justify-content: flex-end;
  align-items: center;
`;

const _AppbarInner = styled.View`
  align-items: center;
  /* background-color: gray; */
`;

const _AppbarTitle = styled.Text`
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
`;

const _AppbarLeft = styled.Text`
  position: absolute;
  left: 19px;
  bottom: 16px;
  color: #ffffff;
`;

const _AppbarRight = styled.Text`
  position: absolute;
  right: 19px;
  bottom: 16px;
  color: #ffffff;
  opacity: 0.7;
`;

export default AppBar;
