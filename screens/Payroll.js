// screens/Payroll.js
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

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
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Salary Slip</Text>
          <ScrollView>
            <Text style={styles.modalText}>Month: {selectedMonth}</Text>
            <Text style={styles.modalText}>Year: {selectedYear}</Text>
            <Text style={styles.modalText}>Basic Pay: ₹40,000</Text>
            <Text style={styles.modalText}>HRA: ₹10,000</Text>
            <Text style={styles.modalText}>Total: ₹50,000</Text>
          </ScrollView>
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
        <Text style={styles.buttonText}>View Salary History</Text>
      </TouchableOpacity>

      {renderSalarySlip()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff7ff',
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
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  downloadButton: {
    flexDirection: 'row',
    backgroundColor: '#7a4fc3',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  downloadText: {
    color: '#fff',
    marginLeft: 6,
    fontWeight: 'bold'
  },
  closeText: {
    color: '#7a4fc3',
    marginTop: 10,
    textAlign: 'center'
  }
});

export default Payroll;
