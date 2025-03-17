import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Link href="/" asChild>
        <TouchableOpacity style={styles.logoContainer}>
          <Ionicons name="shield-checkmark" size={24} color="#4CAF50" />
          <Text style={styles.logoText}>SafeRoute</Text>
        </TouchableOpacity>
      </Link>
      
      <View style={styles.navLinks}>
        <Link href="/about" asChild>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>About</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/contact" asChild>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Contact</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#333',
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItem: {
    marginHorizontal: 15,
  },
  navText: {
    fontSize: 16,
    color: '#666',
  },
  getStartedButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: 15,
  },
  getStartedText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Navbar; 