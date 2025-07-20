import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import SmallCardsSection from '../components/ui/SmallCardsSection';
import BigCardsGrid from '../components/ui/BigCardsGrid';
import EventsList from '../components/ui/EventsList';

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FDEFFF" barStyle="dark-content" />

      {/* Removed duplicate header */}
      <SmallCardsSection navigation={navigation} />
      <BigCardsGrid navigation={navigation} />
      <EventsList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDEFFF',
  },
});

export default Dashboard;
