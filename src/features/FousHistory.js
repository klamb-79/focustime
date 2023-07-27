import { React } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizings';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>We have not Focus on Anything Yet:</Text>;

  const renderItem = ({ item }) => <Text style={styles.items}>- {item} -</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we have focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingLeft: spacing.md,
    fontWeight: 'bold',
  },

  items: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
});
