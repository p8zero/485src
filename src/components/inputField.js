import React from 'react';
import {View, Text, TouchableOpacity, TextInput,} from 'react-native';

const InputField = ({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChangeText,
  colorScheme
}) => {

  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#18163A';
  const placeholderTextColor = colorScheme === 'dark' ? '#FFFFFF' : '#8F8F8F';

  return (
    <View
      style={{
        marginHorizontal: '5%',
        paddingHorizontal: '5%',
        marginTop: '3%',
        marginBottom: '2%',
        backgroundColor: '#FFF5EF',
        borderRadius: 50,
        height: 45,
      }}>
      
        <TextInput
          placeholder={label}
          style={{flex: 1,letterSpacing: 2, color: textColor, fontWeight: '300', fontSize: 18, fontFamily: 'WorkSans-Light' }}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor}
        />
      

    </View>
  );
};
export default InputField;
