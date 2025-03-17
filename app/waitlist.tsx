import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import WaitlistSection from './components/WaitlistSection';

export default function WaitlistScreen() {
  return (
    <ScrollView style={styles.container}>
      <WaitlistSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
}); 