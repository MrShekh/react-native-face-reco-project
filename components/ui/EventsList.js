import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const events = [
  { date: '08', title: 'Meeting on hold', desc: 'The meeting is on hold.' },
  { date: '12', title: 'Scheduled payment', desc: 'Payment collection notification.' },
  { date: '14', title: 'Project Briefing', desc: 'Briefing about new project.' },
  { date: '17', title: 'Trip Planning', desc: 'Trip planning notification.' },
  { date: '21', title: 'Client Follow-up', desc: 'Follow up with client.' },
  { date: '23', title: 'Design Review', desc: 'Review latest design updates.' },
  { date: '26', title: 'Budget Meeting', desc: 'Budget planning for Q4.' },
  { date: '29', title: 'Team Lunch', desc: 'Team gathering lunch.' },
];

const EventsList = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {events.map((event, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.date}>{event.date}</Text>
            <View style={styles.details}>
              <Text style={styles.title}>{event.title}</Text>
              <Text style={styles.desc}>{event.desc}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    height: 200, // This restricts view to ~4 events
  },
  card: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  date: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 15,
    color: '#333',
  },
  details: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  desc: {
    fontSize: 12,
    color: '#777',
  },
});

export default EventsList;
