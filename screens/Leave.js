// screens/Leave.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const leaveData = [
  {
    title: 'Casual Leave',
    opening: 12,
    taken: 5,
    available: 7,
  },
  {
    title: 'Sick Leave',
    opening: 6,
    taken: 2,
    available: 4,
  },
  {
    title: 'Privileged Leave',
    opening: 15,
    taken: 3,
    available: 12,
  },
];

const Leave = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('LeaveBalance');

  const renderLeaveBalance = () => (
    <View style={styles.cardWrapper}>
      {leaveData.map((leave, index) => (
        <View key={index} style={styles.leaveCard}>
          <Text style={styles.leaveTitle}>{leave.title}</Text>
          <Text style={styles.leaveText}>Opening Balance: {leave.opening}</Text>
          <Text style={styles.leaveText}>Taken: {leave.taken}</Text>
          <Text style={styles.leaveText}>Available: {leave.available}</Text>
        </View>
      ))}
    </View>
  );

  const renderPlaceholder = (label) => (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderText}>{label} content coming soon...</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.header}>Leave</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'LeaveBalance' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('LeaveBalance')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'LeaveBalance' && styles.activeTabText,
            ]}
          >
            Leave balance
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Holidays' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('Holidays')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Holidays' && styles.activeTabText,
            ]}
          >
            Holidays
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'CompOff' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('CompOff')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'CompOff' && styles.activeTabText,
            ]}
          >
            Comp off
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {selectedTab === 'LeaveBalance'
          ? renderLeaveBalance()
          : selectedTab === 'Holidays'
          ? renderPlaceholder('Holiday')
          : renderPlaceholder('Comp Off')}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF4FF' },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },

  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E0DCE3',
  },
  tab: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: '#7C4DFF',
  },
  tabText: {
    fontSize: 14,
    color: '#888',
  },
  activeTabText: {
    color: '#7C4DFF',
    fontWeight: 'bold',
  },

  scrollView: {
    padding: 16,
  },

  cardWrapper: {
    gap: 16,
  },

  leaveCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
  },
  leaveTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  leaveText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },

  placeholder: {
    padding: 32,
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 15,
    color: '#888',
  },
});

export default Leave;
