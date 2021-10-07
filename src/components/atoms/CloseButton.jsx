import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { func } from 'prop-types';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const CloseButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <$DeleteIcon name="delete" size={30} color="#848484" />
  </TouchableOpacity>
);

CloseButton.propTypes = {
  onPress: func,
};

CloseButton.defaultProps = {
  onPress: null,
};

const $DeleteIcon = styled(Icon)`
  padding: 8px;
`;

export default CloseButton;
