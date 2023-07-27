import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, Vibration } from 'react-native';
import { usekKeepAwake } from 'expo-keep-awake';
import { ProgressBar } from 'react-native-paper';
import { colors } from '../utils/colors';
import { Countdown } from '../componts/Countdown';
import { RoundedButton } from '../componts/button';
import { spacing, fontSizes } from '../utils/sizings';
import { Timing } from './Timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  usekKeepAwake;
  const [isStated, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.2);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStated}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ padding: spacing.xxl }}>
          <Text style={styles.Title}>Foucsing On:</Text>
          <Text style={styles.Task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.pBarColor}
          style={{ height: spacing.sm }}
        />
      </View>

      <View style={styles.timingWapper}>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.buttonWapper}>
        {!isStated && (
          <RoundedButton title="start " onPress={() => setIsStarted(true)} />
        )}
        {isStated && (
          <RoundedButton title="pause " onPress={() => setIsStarted(false)} />
        )}
      </View>

      <View style={styles.clearWapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    paddingTop: 30,
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingWapper: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: spacing.xl,
  },
  clearWapper: {
    flexDirection: 'row',

    justifyContent: 'center',
  },
  buttonWapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fontSizes.nd,
    color: colors.white,
  },
  Task: {
    color: colors.white,
    fontSize: fontSizes.md,
    textAlign: 'center',
  },
});
