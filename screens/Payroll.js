// screens/Payroll.js
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const pastPayrolls = [
  { month: 'June', year: '2024', total: '₹50,000', basic: '₹40,000', hra: '₹10,000' },
  { month: 'May', year: '2024', total: '₹49,000', basic: '₹39,000', hra: '₹10,000' },
  { month: 'April', year: '2024', total: '₹48,500', basic: '₹38,500', hra: '₹10,000' },
];

const Payroll = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [showSlip, setShowSlip] = useState(false);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const years = ['2022', '2023', '2024', '2025'];

  const handleDownload = async () => {
    const slipContent = `Salary Slip\n\nMonth: ${selectedMonth}\nYear: ${selectedYear}\nBasic Pay: ₹40,000\nHRA: ₹10,000\nTotal: ₹50,000`;
    const fileUri = FileSystem.documentDirectory + 'salary_slip.txt';

    await FileSystem.writeAsStringAsync(fileUri, slipContent);
    await Sharing.shareAsync(fileUri);
  };

  const renderSalarySlip = () => (
    <Modal visible={showSlip} transparent={true} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.billContent}>
          <Text style={styles.billTitle}>Salary Slip</Text>
          <View style={styles.billSection}>
            <Text style={styles.billLabel}>Month:</Text>
            <Text style={styles.billValue}>{selectedMonth}</Text>
          </View>
          <View style={styles.billSection}>
            <Text style={styles.billLabel}>Year:</Text>
            <Text style={styles.billValue}>{selectedYear}</Text>
          </View>
          <View style={styles.billDivider} />
          <View style={styles.billSection}>
            <Text style={styles.billLabel}>Basic Pay</Text>
            <Text style={styles.billValue}>₹40,000</Text>
          </View>
          <View style={styles.billSection}>
            <Text style={styles.billLabel}>HRA</Text>
            <Text style={styles.billValue}>₹10,000</Text>
          </View>
          <View style={styles.billDivider} />
          <View style={styles.billSection}>
            <Text style={styles.billLabelTotal}>Total</Text>
            <Text style={styles.billValueTotal}>₹50,000</Text>
          </View>
          <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
            <Ionicons name="download-outline" size={20} color="#fff" />
            <Text style={styles.downloadText}>Download</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowSlip(false)}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  const renderPastPayrolls = () => (
    <View style={styles.historySection}>
      <Text style={styles.historyTitle}>Past Payrolls</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.historyScroll}>
        {pastPayrolls.map((item, idx) => (
          <View key={idx} style={styles.historyCard}>
            <Text style={styles.historyMonth}>{item.month} {item.year}</Text>
            <View style={styles.historyDivider} />
            <Text style={styles.historyLabel}>Total</Text>
            <Text style={styles.historyTotal}>{item.total}</Text>
            <Text style={styles.historyLabel}>Basic</Text>
            <Text style={styles.historyValue}>{item.basic}</Text>
            <Text style={styles.historyLabel}>HRA</Text>
            <Text style={styles.historyValue}>{item.hra}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payroll Management</Text>
      <Text style={styles.subtitle}>Select Month & Year</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedMonth}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedMonth(itemValue)}>
          <Picker.Item label="Select Month" value="" />
          {months.map((month, index) => (
            <Picker.Item key={index} label={month} value={month} />
          ))}
        </Picker>
        <Picker
          selectedValue={selectedYear}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedYear(itemValue)}>
          <Picker.Item label="Select Year" value="" />
          {years.map((year, index) => (
            <Picker.Item key={index} label={year} value={year} />
          ))}
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => setShowSlip(true)}>
        <Ionicons name="eye-outline" size={20} color="#7a4fc3" />
        <Text style={styles.buttonText}>View Salary Slip</Text>
      </TouchableOpacity>
      {renderPastPayrolls()}
      {renderSalarySlip()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  picker: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#aaa',
    borderWidth: 1,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#f5f0ff',
    borderColor: '#7a4fc3',
    borderWidth: 1,
    borderRadius: 20,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  buttonText: {
    color: '#7a4fc3',
    fontSize: 16,
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  billContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
    elevation: 6,
  },
  billTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginBottom: 12,
  },
  billSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 4,
  },
  billLabel: {
    fontSize: 16,
    color: '#555',
  },
  billValue: {
    fontSize: 16,
    color: '#222',
    fontWeight: '600',
  },
  billDivider: {
    height: 1,
    backgroundColor: '#eee',
    width: '100%',
    marginVertical: 8,
  },
  billLabelTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  billValueTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A1B9A',
  },
  historySection: {
    marginTop: 32,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#6A1B9A',
    paddingLeft: 4,
  },
  historyScroll: {
    flexDirection: 'row',
    gap: 12,
    paddingBottom: 8,
  },
  historyCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginRight: 12,
    width: 160,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
    alignItems: 'center',
  },
  historyMonth: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7a4fc3',
    marginBottom: 4,
  },
  historyDivider: {
    height: 1,
    backgroundColor: '#eee',
    width: '100%',
    marginVertical: 6,
  },
  historyLabel: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  historyTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  historyValue: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
});

export default Payroll;
