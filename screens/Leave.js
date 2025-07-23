// screens/Leave.js
import React, { useState } from 'react';
import {
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
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

const leaveHistory = [
  {
    id: 1,
    type: 'Casual',
    status: 'Awaiting',
    statusColor: '#FFE9A0',
    statusTextColor: '#B68B00',
    date: 'Wed, 16 Dec',
    days: 'Half Day Application',
    subType: 'Casual',
    month: 'December 2020',
  },
  {
    id: 2,
    type: 'Sick',
    status: 'Approved',
    statusColor: '#B6F5C3',
    statusTextColor: '#1B8C3A',
    date: 'Mon, 28 Nov',
    days: 'Full Day Application',
    subType: 'Sick',
    month: 'November 2020',
  },
  {
    id: 3,
    type: 'Casual',
    status: 'Declined',
    statusColor: '#FFD6D6',
    statusTextColor: '#C62828',
    date: 'Tue, 22 Nov - Fri, 25 Nov',
    days: '3 Days Application',
    subType: 'Casual',
    month: 'November 2020',
  },
  {
    id: 4,
    type: 'Sick',
    status: 'Approved',
    statusColor: '#B6F5C3',
    statusTextColor: '#1B8C3A',
    date: 'Wed, 02 Nov',
    days: 'Full Day Application',
    subType: 'Sick',
    month: 'November 2020',
  },
];

const Leave = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    type: 'Casual',
    cause: '',
    from: '',
    to: '',
    fromTime: '',
    toTime: '',
  });

  const leaveTypes = [
    { label: 'All', value: 'All', color: '#fff' },
    { label: 'Casual', value: 'Casual', color: '#FFD600' },
    { label: 'Sick', value: 'Sick', color: '#7C4DFF' },
  ];

  const groupedHistory = leaveHistory.reduce((acc, item) => {
    acc[item.month] = acc[item.month] || [];
    acc[item.month].push(item);
    return acc;
  }, {});

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

  const renderHistory = () => (
    <View style={{ marginTop: 16 }}>
      {Object.keys(groupedHistory).map((month) => (
        <View key={month} style={{ marginBottom: 8 }}>
          <Text style={styles.monthLabel}>{month}</Text>
          {groupedHistory[month]
            .filter((item) => selectedTab === 'All' || item.type === selectedTab)
            .map((item) => (
              <View key={item.id} style={styles.leaveHistoryCard}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.leaveHistoryDays}>{item.days}</Text>
                  <View style={[styles.statusBadge, { backgroundColor: item.statusColor }]}>
                    <Text style={[styles.statusBadgeText, { color: item.statusTextColor }]}>{item.status}</Text>
                  </View>
                </View>
                <Text style={styles.leaveHistoryDate}>{item.date}</Text>
                <Text style={styles.leaveHistoryType}>{item.subType}</Text>
                <TouchableOpacity style={styles.arrowBtn}>
                  <Icon name="chevron-right" size={22} color="#bbb" />
                </TouchableOpacity>
              </View>
            ))}
        </View>
      ))}
    </View>
  );

  const renderNewLeaveModal = () => (
    <Modal visible={showModal} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.newLeaveModal}>
          <Text style={styles.newLeaveTitle}>New Leave</Text>
          <View style={styles.inputRow}>
            <Icon name="calendar-blank-outline" size={22} color="#7C4DFF" style={styles.inputIcon} />
            <Text style={styles.inputLabel}>Type</Text>
            <Text style={styles.inputValue}>{form.type}</Text>
          </View>
          <View style={styles.inputRow}>
            <Icon name="pencil-outline" size={22} color="#7C4DFF" style={styles.inputIcon} />
            <Text style={styles.inputLabel}>Cause</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Reason for leave"
              value={form.cause}
              onChangeText={(v) => setForm({ ...form, cause: v })}
            />
          </View>
          <View style={styles.inputRow}>
            <Icon name="arrow-right-bold-circle-outline" size={22} color="#7C4DFF" style={styles.inputIcon} />
            <Text style={styles.inputLabel}>From</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Start date/time"
              value={form.from}
              onChangeText={(v) => setForm({ ...form, from: v })}
            />
          </View>
          <View style={styles.inputRow}>
            <Icon name="arrow-right-bold-circle-outline" size={22} color="#7C4DFF" style={styles.inputIcon} />
            <Text style={styles.inputLabel}>To</Text>
            <TextInput
              style={styles.inputText}
              placeholder="End date/time"
              value={form.to}
              onChangeText={(v) => setForm({ ...form, to: v })}
            />
          </View>
          <TouchableOpacity style={styles.applyBtn} onPress={() => setShowModal(false)}>
            <Text style={styles.applyBtnText}>Apply for Leave</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowModal(false)}>
            <Text style={styles.cancelBtnText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {leaveTypes.map((tab) => (
          <TouchableOpacity
            key={tab.value}
            style={[styles.tabBtn, selectedTab === tab.value && styles.tabBtnActive]}
            onPress={() => setSelectedTab(tab.value)}
          >
            <Text style={[styles.tabBtnText, selectedTab === tab.value && styles.tabBtnTextActive]}>{tab.label}</Text>
            {tab.value !== 'All' && <View style={[styles.tabDot, { backgroundColor: tab.color }]} />}
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {renderHistory()}
      </ScrollView>
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('AddLeave')}>
        <Icon name="plus" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 56 : 24,
    paddingBottom: 8,
    backgroundColor: '#fff',
    elevation: 2,
    zIndex: 1,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#181A20',
  },
  addBtn: {
    backgroundColor: '#7C4DFF',
    borderRadius: 12,
    padding: 8,
    elevation: 2,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 16,
    padding: 4,
    alignItems: 'center',
    elevation: 1,
  },
  tabBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 2,
  },
  tabBtnActive: {
    backgroundColor: '#fff',
  },
  tabBtnText: {
    fontSize: 16,
    color: '#888',
    fontWeight: '600',
  },
  tabBtnTextActive: {
    color: '#181A20',
  },
  tabDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 6,
  },
  monthLabel: {
    fontSize: 14,
    color: '#888',
    marginVertical: 8,
    marginLeft: 2,
    fontWeight: '600',
  },
  leaveHistoryCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    position: 'relative',
  },
  leaveHistoryDays: {
    fontSize: 15,
    color: '#888',
    fontWeight: '600',
  },
  statusBadge: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  statusBadgeText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  leaveHistoryDate: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#181A20',
    marginTop: 4,
  },
  leaveHistoryType: {
    fontSize: 14,
    color: '#7C4DFF',
    marginTop: 2,
    fontWeight: '600',
  },
  arrowBtn: {
    position: 'absolute',
    right: 8,
    top: '50%',
    marginTop: -12,
    padding: 4,
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 32,
    backgroundColor: '#7C4DFF',
    borderRadius: 28,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newLeaveModal: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 24,
    width: '90%',
    maxWidth: 400,
    elevation: 8,
    alignItems: 'stretch',
  },
  newLeaveTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7C4DFF',
    marginBottom: 18,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  inputIcon: {
    marginRight: 8,
  },
  inputLabel: {
    fontSize: 15,
    color: '#888',
    width: 60,
    fontWeight: '600',
  },
  inputValue: {
    fontSize: 15,
    color: '#181A20',
    fontWeight: '600',
  },
  inputText: {
    flex: 1,
    fontSize: 15,
    color: '#181A20',
    borderBottomWidth: 1,
    borderColor: '#E0DCE3',
    marginLeft: 8,
    paddingVertical: 2,
  },
  applyBtn: {
    backgroundColor: '#7C4DFF',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 18,
  },
  applyBtnText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  cancelBtnText: {
    color: '#888',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
  scrollView: {
    padding: 16,
    paddingBottom: 100,
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
