import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');

const Splash = ({ navigation }) => {
  const animation = useRef(null);

  return (
    <View style={styles.container}>
      {/* Lottie Animation */}
      <LottieView
        ref={animation}
        source={require('../assets/animations/splash.json')} // ✅ Path must be correct
        autoPlay
        loop
        style={styles.lottie}
      />

      {/* Title */}
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>
        Employee Management App used by employees of Pentaforge
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  lottie: {
    width: '100%',
    height: height * 0.4, // Takes 40% of screen height
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#888',
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#7C4DFF',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Splash;
