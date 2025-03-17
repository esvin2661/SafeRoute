import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TermsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="document-text" size={24} color="#4CAF50" />
        <Text style={styles.title}>Terms of Service</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
        <Text style={styles.text}>
          By accessing and using SafeRoute, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our service.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Use License</Text>
        <Text style={styles.text}>
          Permission is granted to temporarily download one copy of SafeRoute for personal, non-commercial transitory viewing only. This license does not include:
        </Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Modifying or copying the materials</Text>
          <Text style={styles.listItem}>• Using the materials for commercial purposes</Text>
          <Text style={styles.listItem}>• Attempting to decompile or reverse engineer the software</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. User Responsibilities</Text>
        <Text style={styles.text}>
          As a user of SafeRoute, you agree to:
        </Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Provide accurate information</Text>
          <Text style={styles.listItem}>• Maintain the security of your account</Text>
          <Text style={styles.listItem}>• Use the service in compliance with laws</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Disclaimer</Text>
        <Text style={styles.text}>
          SafeRoute is provided "as is" without any warranties, expressed or implied. We do not guarantee the accuracy, reliability, or availability of the service.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Limitations</Text>
        <Text style={styles.text}>
          In no event shall SafeRoute be liable for any damages arising out of the use or inability to use the service.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>6. Changes to Terms</Text>
        <Text style={styles.text}>
          We reserve the right to modify these terms at any time. Continued use of the service after such modifications constitutes acceptance of the updated terms.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text style={styles.text}>
          If you have any questions about these Terms of Service, please contact us at:
        </Text>
        <Text style={styles.contactInfo}>legal@saferoute.com</Text>
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