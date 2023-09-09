import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const BackButtonPersona = ({onPress, icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#F6DEDC',
        borderRadius: 50,
        width: 36,
        height: 36,
      }}>
      <View style={{alignItems: 'center', marginTop: 5}}>{icon}</View>
    </TouchableOpacity>
  );
};
export default BackButtonPersona;