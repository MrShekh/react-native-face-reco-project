import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const EmployeeDetails = ({ route }) => {
  const { employee } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: employee.image }} style={styles.image} />

      <Text style={styles.name}>{employee.name}</Text>
      <Text style={styles.role}>{employee.role}</Text>

      <View style={styles.divider} />

      <View style={styles.row}>
        <MaterialIcons name="email" size={20} color="#555" />
        <Text style={styles.text}>{employee.email || 'john.doe@example.com'}</Text>
      </View>

      <View style={styles.row}>
        <MaterialCommunityIcons name="office-building" size={20} color="#555" />
        <Text style={styles.text}>{employee.department || 'IT'}</Text>
      </View>

      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.about}>
        {employee.about || 'Passionate about technology and teamwork.'}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#faf6ff',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
    marginVertical: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 6,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    color: '#444',
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  about: {
    fontSize: 15,
    color: '#333',
    marginTop: 6,
    alignSelf: 'flex-start',
  },
});

export default EmployeeDetails;
