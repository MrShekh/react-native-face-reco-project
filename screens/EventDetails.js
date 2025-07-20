import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const EventDetails = ({ route }) => {
  const { event } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.label}>📅 Date:</Text>
      <Text style={styles.text}>{event.date}</Text>

      <Text style={styles.label}>⏰ Time:</Text>
      <Text style={styles.text}>{event.time}</Text>

      <Text style={styles.label}>📍 Location:</Text>
      <Text style={styles.text}>{event.location}</Text>

      <Text style={styles.label}>👤 Organized By:</Text>
      <Text style={styles.text}>{event.organizer}</Text>

      <Text style={styles.label}>📝 Description:</Text>
      <Text style={styles.text}>{event.desc}</Text>

      <Text style={styles.label}>📖 Details:</Text>
      <Text style={styles.text}>{event.details}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#e91e63',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    color: '#555',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});

export default EventDetails;
