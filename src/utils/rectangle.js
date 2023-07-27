import React from 'react';
import {View, StyleSheet} from 'react-native';

export const TopBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 0.1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    //padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.5,
    backgroundColor: 'grey',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
 
});

