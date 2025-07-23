import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BigCardsGrid from '../components/ui/BigCardsGrid';
import EventsList from '../components/ui/EventsList';
import SmallCardsSection from '../components/ui/SmallCardsSection';

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000000ff" barStyle="dark-content" />
      <SmallCardsSection navigation={navigation} />
      <BigCardsGrid navigation={navigation} />
      <EventsList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
  },
  profileIconBtn: {
    padding: 4,
  },
});

export default Dashboard;
