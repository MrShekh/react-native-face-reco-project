import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 60) / 3;

const cards = [
  { title: 'Leave', iconName: 'umbrella-outline', color: 'orange', screen: 'Leave' },
  { title: 'Feedback', iconName: 'message-reply-text', color: '#00796B', screen: 'Feedback' },
  { title: 'Messaging', iconName: 'chat-outline', color: '#0288D1', screen: 'Messaging' },
];

const SmallCardsSection = ({ navigation }) => {
  return (
    <FlatList
      data={cards}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.title}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Icon name={item.iconName} size={24} color={item.color} />
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: cardWidth,
    height: 80,
    elevation: 3,
  },
  text: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
});

export default SmallCardsSection;
