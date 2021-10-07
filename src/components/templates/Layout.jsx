import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import AppBar from '../organisms/AppBar';

const Layout = ({ children }) => (
  <_MemoContainer>
    {/* <AppBar /> */}
    {children}
  </_MemoContainer>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

const _MemoContainer = styled.View`
  flex: 1;
  background-color: #f0f4f8;
`;

export default Layout;
