import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import DashboardTile from '../DashboardTile';

const bigCards = [
  { title: 'Employee', iconName: 'account-multiple', color: 'purple', screen: 'Employee' },
  { title: 'Payroll', iconName: 'currency-usd', color: '#FBC02D', screen: 'Payroll' },
  { title: 'Attendance', iconName: 'clock-outline', color: 'green', screen: 'Attendance' },
  { title: 'HR Documents', iconName: 'file-document-outline', color: 'red', screen: 'HRDocuments' },
  { title: 'Task Box', iconName: 'checkbox-marked-outline', color: '#1976D2', screen: 'TaskBox' },
  { title: 'Performance', iconName: 'trending-up', color: 'purple', screen: 'Performance' },
];

const BigCardsGrid = ({ navigation }) => {
  return (
    <FlatList
      data={bigCards}
      numColumns={2}
      contentContainerStyle={styles.grid}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <DashboardTile
          title={item.title}
          iconName={item.iconName}
          iconColor={item.color}
          onPress={() => navigation.navigate(item.screen)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

export default BigCardsGrid;
