// screens/HRDocuments.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const myDocuments = [
  { id: '1', title: 'Offer Letter - John Doe' },
  { id: '2', title: 'Salary Slip - Jane Smith' },
  { id: '3', title: 'Company Policy Handbook' },
];

const hrPolicies = [
  { id: '1', title: 'General Rules', date: '04-10-2024' },
  { id: '2', title: 'Leave Policy', date: '01-09-2024' },
  { id: '3', title: 'Remote Work Policy', date: '15-08-2024' },
];

const MyDocumentsTab = ({ navigation }) => (
  <FlatList
    data={myDocuments}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => navigation.navigate('DocumentDetail', { document: item })}
      >
        <Ionicons name="document-text-outline" size={24} color="#4a5fc1" />
        <Text style={styles.itemText}>{item.title}</Text>
      </TouchableOpacity>
    )}
  />
);

const HRPoliciesTab = ({ navigation }) => (
  <FlatList
    data={hrPolicies}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => navigation.navigate('DocumentDetail', { document: item })}
      >
        <MaterialIcons name="picture-as-pdf" size={24} color="red" />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.itemText}>{item.title}</Text>
          <Text style={styles.dateText}>Last Updated On: {item.date}</Text>
        </View>
      </TouchableOpacity>
    )}
  />
);

const HRDocuments = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff7ff' }}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14 },
          tabBarIndicatorStyle: { backgroundColor: '#7a4fc3' },
        }}
      >
        <Tab.Screen name="My Documents" component={MyDocumentsTab} />
        <Tab.Screen name="HR Policies" component={HRPoliciesTab} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
  },
  dateText: {
    marginLeft: 10,
    fontSize: 12,
    color: 'gray',
  },
});

export default HRDocuments;
