import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="mail" size={24} color="#4CAF50" />
        <Text style={styles.title}>Contact Us</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Get in Touch</Text>
        <Text style={styles.text}>
          Have questions or feedback? We'd love to hear from you. Choose the best way to reach us below.
        </Text>
      </View>

      <View style={styles.contactOptions}>
        <TouchableOpacity style={styles.contactOption}>
          <Ionicons name="mail-outline" size={24} color="#4CAF50" />
          <Text style={styles.optionText}>Email Us</Text>
          <Text style={styles.optionDetail}>support@safelyroute.com</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactOption}>
          <Ionicons name="chatbubble-outline" size={24} color="#4CAF50" />
          <Text style={styles.optionText}>Live Chat</Text>
          <Text style={styles.optionDetail}>Available 24/7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactOption}>
          <Ionicons name="call-outline" size={24} color="#4CAF50" />
          <Text style={styles.optionText}>Call Us</Text>
          <Text style={styles.optionDetail}>+1 (555) 123-4567</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Office Location</Text>
        <Text style={styles.text}>
          123 Safety Street{'\n'}
          San Francisco, CA 94105{'\n'}
          United States
        </Text>
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
  },
  contactOptions: {
    padding: 20,
  },
  contactOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 15,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginLeft: 15,
    flex: 1,
  },
  optionDetail: {
    fontSize: 14,
    color: '#666',
  },
}); 