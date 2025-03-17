import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const HeroSection = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4CAF50', '#45a049']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Navigate Your World with Confidence</Text>
            <Text style={styles.subtitle}>
              Real-time safety updates and optimal route planning for your peace of mind
            </Text>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Start Your Safe Journey</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.iconContainer}>
            <View style={styles.iconBackground}>
              <Ionicons name="shield-checkmark" size={120} color="#4CAF50" />
            </View>
            <View style={styles.smallIconsContainer}>
              <View style={styles.smallIconBackground}>
                <Ionicons name="map" size={40} color="#4CAF50" />
              </View>
              <View style={styles.smallIconBackground}>
                <Ionicons name="location" size={40} color="#4CAF50" />
              </View>
              <View style={styles.smallIconBackground}>
                <Ionicons name="notifications" size={40} color="#4CAF50" />
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 60,
  },
  textContainer: {
    flex: 1,
    maxWidth: '50%',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 30,
    lineHeight: 28,
  },
  ctaButton: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  ctaButtonText: {
    color: '#4CAF50',
    fontSize: 18,
    fontWeight: '600',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBackground: {
    backgroundColor: 'white',
    borderRadius: 100,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  smallIconsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
  },
  smallIconBackground: {
    backgroundColor: 'white',
    borderRadius: 40,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default HeroSection; 