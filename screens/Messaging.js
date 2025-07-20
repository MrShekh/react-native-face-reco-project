// screens/Messaging.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Messaging = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Messaging Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Messaging;
