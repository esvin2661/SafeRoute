import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

export default function LandingPage() {
  return (
    <ScrollView style={styles.container}>
      <Navbar />
      <HeroSection />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
}); 