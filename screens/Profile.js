// screens/Profile.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture + Camera Icon */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          style={styles.profileImage}
        />
        {/* <TouchableOpacity style={styles.cameraIcon}>
          <Ionicons name="camera" size={18} color="#fff" />
        </TouchableOpacity> */}
        <Text style={styles.accountTitle}>Account</Text>
      </View>

      {/* Personal Info Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PERSONAL INFORMATION</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Username</Text>
          <Text style={styles.value}>@johndoe</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>John Doe</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>(123) 456-7890</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Birthday</Text>
          <Text style={styles.value}>May 5th, 1996</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Country</Text>
          <Text style={styles.value}>United States</Text>
        </View>
      </View>

      {/* Login Info Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>LOGIN INFORMATION</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>john@example.com</Text>
        </View>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.label}>Update password</Text>
          <AntDesign name="right" size={16} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Social Accounts Section */}
      {/* <View style={styles.section}>
        <Text style={styles.sectionTitle}>SOCIAL ACCOUNTS</Text>
        <View style={styles.row}>
          <View style={styles.iconRow}>
            <AntDesign name="apple1" size={16} />
            <Text style={styles.label}>X</Text>
          </View>
          <Text style={[styles.value, { color: 'blue' }]}>Connected</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.iconRow}>
            <FontAwesome name="discord" size={16} />
            <Text style={styles.label}>Discord</Text>
          </View>
          <Text style={[styles.value, { color: 'blue' }]}>Connected</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.iconRow}>
            <FontAwesome name="facebook" size={16} />
            <Text style={styles.label}>Facebook</Text>
          </View>
          <Text style={[styles.value, { color: 'red' }]}>Needs Verification</Text>
        </View>
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    paddingTop: 40,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 10,
    right: 140,
    backgroundColor: '#007bff',
    padding: 5,
    borderRadius: 50,
  },
  accountTitle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '600',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#999',
    marginBottom: 10,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
  iconRow: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
});

export default Profile;
