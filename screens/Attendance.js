// screens/Attendance.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const attendanceData = [
  { date: '2025-03-17', checkIn: '09:00 AM', checkOut: '05:00 PM' },
  { date: '2025-03-18', checkIn: '08:55 AM', checkOut: '05:05 PM' },
  { date: '2025-03-19', checkIn: '09:10 AM', checkOut: '05:15 PM' },
  { date: '2025-03-20', checkIn: '09:03 AM', checkOut: '05:00 PM' },
  { date: '2025-03-21', checkIn: '09:00 AM', checkOut: '05:00 PM' },
  { date: '2025-03-22', checkIn: '09:00 AM', checkOut: '01:00 PM' },
  { date: '2025-03-23', checkIn: '-', checkOut: '-' },
];

const Attendance = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Summary');

  const renderHistory = () => (
    <View style={styles.historyTable}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Date</Text>
        <Text style={styles.tableHeaderText}>Check In</Text>
        <Text style={styles.tableHeaderText}>Check Out</Text>
      </View>
      {attendanceData.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={styles.tableCell}>{item.date}</Text>
          <Text style={styles.tableCell}>{item.checkIn}</Text>
          <Text style={styles.tableCell}>{item.checkOut}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.header}>Attendance</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Summary' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('Summary')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Summary' && styles.activeTabText,
            ]}
          >
            Summary
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'CheckIn' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('CheckIn')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'CheckIn' && styles.activeTabText,
            ]}
          >
            Check In
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {selectedTab === 'Summary' ? (
          <>
            <Text style={styles.month}>2025 July</Text>
            <View style={styles.summaryCards}>
              <View style={styles.summaryCard}>
                <Text style={styles.summaryValue}>2</Text>
                <Text style={styles.summaryLabel}>Leave Days</Text>
              </View>
              <View style={styles.summaryCard}>
                <Text style={styles.summaryValue}>18</Text>
                <Text style={styles.summaryLabel}>Present Days</Text>
              </View>
              <View style={styles.summaryCard}>
                <Text style={styles.summaryValue}>1</Text>
                <Text style={styles.summaryLabel}>Absent Days</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.attendanceViewBtn}>
              <Text style={styles.attendanceViewText}>Attendance View</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Weekly Off</Text>
            <Text style={styles.weeklyText}>Sunday</Text>
            <Text style={styles.weeklyText}>All Sunday</Text>

            <Text style={styles.sectionTitle}>Attendance History</Text>
            {renderHistory()}
          </>
        ) : (
          <>
            <TouchableOpacity style={styles.checkInButton}>
              <Text style={styles.checkInText}>Check In</Text>
            </TouchableOpacity>
            {renderHistory()}
          </>
        )}
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
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  month: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 12,
  },
  summaryCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  summaryCard: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    padding: 16,
    alignItems: 'center',
  },
  summaryValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  summaryLabel: {
    fontSize: 12,
    color: '#777',
    marginTop: 6,
  },
  attendanceViewBtn: {
    backgroundColor: '#EFEAF6',
    padding: 12,
    borderRadius: 25,
    marginTop: 10,
    alignItems: 'center',
  },
  attendanceViewText: {
    color: '#7C4DFF',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 18,
    color: '#333',
  },
  weeklyText: {
    fontSize: 13,
    color: '#555',
  },
  checkInButton: {
    backgroundColor: '#2196F3',
    padding: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 20,
  },
  checkInText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  historyTable: {
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#EFEAF6',
    padding: 8,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    color: '#555',
    fontSize: 13,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  tableCell: {
    flex: 1,
    color: '#333',
    fontSize: 13,
  },
});

export default Attendance;
