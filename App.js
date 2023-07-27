import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/focus';
import {Timer} from './src/features/Timer';
import {FocusHistory} from './src/features/FousHistory'
import {TopBar} from './src/utils/rectangle'


import { RoundedButton } from './src/componts/button';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([])
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history}/>
        </>
      ) : (
        <Timer
          focusSubject = {currentSubject}
          onTimerEnd ={(subject) =>{
            setHistory([...history, subject])
          }}
          clearSubject = {()=>setCurrentSubject(null)}
           />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 50,
    backgroundColor: colors.darkBlue,
  },
  timer:{
    color: colors.white,
  },
});
