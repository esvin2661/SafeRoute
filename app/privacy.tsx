import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PrivacyScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="shield-checkmark" size={24} color="#4CAF50" />
        <Text style={styles.title}>Privacy Policy</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Information We Collect</Text>
        <Text style={styles.text}>
          We collect information that you provide directly to us, including:
        </Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Location data for route planning</Text>
          <Text style={styles.listItem}>• Account information</Text>
          <Text style={styles.listItem}>• Usage data and preferences</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How We Use Your Information</Text>
        <Text style={styles.text}>
          We use the collected information to:
        </Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Provide and improve our services</Text>
          <Text style={styles.listItem}>• Personalize your experience</Text>
          <Text style={styles.listItem}>• Send important updates and notifications</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data Security</Text>
        <Text style={styles.text}>
          We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Rights</Text>
        <Text style={styles.text}>
          You have the right to:
        </Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Access your personal data</Text>
          <Text style={styles.listItem}>• Correct inaccurate data</Text>
          <Text style={styles.listItem}>• Request deletion of your data</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.text}>
          If you have any questions about this Privacy Policy, please contact us at:
        </Text>
        <Text style={styles.contactInfo}>privacy@saferoute.com</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 10,
  },
  list: {
    marginLeft: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '600',
    marginTop: 5,
  },
}); 