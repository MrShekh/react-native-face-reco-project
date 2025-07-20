// screens/DocumentDetail.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DocumentDetail = ({ route }) => {
  const { document } = route.params;

  const handleDownload = () => {
    Alert.alert('Download', `Downloading ${document.title}...`);
    // Replace with actual download logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{document.title}</Text>
      <Text style={styles.content}>
        {/* Placeholder content. Replace with actual document content or file viewer */}
        This is the detailed content of the document "{document.title}". You can add PDF viewer integration here.
      </Text>
      <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
        <Ionicons name="download-outline" size={20} color="#fff" />
        <Text style={styles.downloadText}>Download Document</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff7ff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
    marginBottom: 30,
  },
  downloadButton: {
    flexDirection: 'row',
    backgroundColor: '#7a4fc3',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DocumentDetail;
