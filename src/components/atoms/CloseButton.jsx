import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { func } from 'prop-types';
import { TouchableOpacity } from 'react-native';

const CloseButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon name="delete" size={30} color="#848484" />
  </TouchableOpacity>
);

CloseButton.propTypes = {
  onPress: func,
};

CloseButton.defaultProps = {
  onPress: null,
};

export default CloseButton;
