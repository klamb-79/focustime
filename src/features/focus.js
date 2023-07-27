import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../componts/button';
import { fontSizes } from '../utils/sizings';
import { TopBar } from '../utils/rectangle';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <TextInput
          style={style.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={style.button}>
          <RoundedButton
            title="+"
            size={60}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    fontSize: 14,
  },
  inputContainer: {
    padding: 25,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
