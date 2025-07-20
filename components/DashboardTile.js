// components/DashboardTile.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DashboardTile = ({ title, iconName, iconColor, onPress }) => {
  return (
    <TouchableOpacity style={styles.tile} onPress={onPress}>
      <Icon name={iconName} size={36} color={iconColor} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: {
    width: 160,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4, // for Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default DashboardTile;
