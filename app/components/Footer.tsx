import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.topSection}>
        <View style={styles.companyInfo}>
          <View style={styles.logoContainer}>
            <Ionicons name="shield-checkmark" size={24} color="#4CAF50" />
            <Text style={styles.logoText}>SafelyRoute</Text>
          </View>
          <Text style={styles.companyDescription}>
            Making your journey safer with real-time navigation and safety alerts.
          </Text>
        </View>

        <View style={styles.linksContainer}>
          <View style={styles.linkColumn}>
            <Text style={styles.columnTitle}>Product</Text>
            <Link href="/features" asChild>
              <TouchableOpacity>
                <Text style={styles.link}>Features</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/pricing" asChild>
              <TouchableOpacity>
                <Text style={styles.link}>Pricing</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.linkColumn}>
            <Text style={styles.columnTitle}>Company</Text>
            <Link href="/about" asChild>
              <TouchableOpacity>
                <Text style={styles.link}>About Us</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/contact" asChild>
              <TouchableOpacity>
                <Text style={styles.link}>Contact</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.linkColumn}>
            <Text style={styles.columnTitle}>Legal</Text>
            <Link href="/privacy" asChild>
              <TouchableOpacity>
                <Text style={styles.link}>Privacy Policy</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/terms" asChild>
              <TouchableOpacity>
                <Text style={styles.link}>Terms of Service</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.copyright}>
          © {new Date().getFullYear()} SafelyRoute. All rights reserved.
        </Text>
        <View style={styles.socialLinks}>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-twitter" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-facebook" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-instagram" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f8f9fa',
    paddingTop: 60,
    paddingBottom: 20,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  companyInfo: {
    flex: 1,
    maxWidth: 300,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#333',
  },
  companyDescription: {
    color: '#666',
    fontSize: 14,
    lineHeight: 24,
  },
  linksContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  linkColumn: {
    marginLeft: 80,
  },
  columnTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  link: {
    color: '#666',
    marginBottom: 12,
    fontSize: 14,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 40,
  },
  copyright: {
    color: '#666',
    fontSize: 14,
  },
  socialLinks: {
    flexDirection: 'row',
  },
  socialIcon: {
    marginLeft: 20,
  },
});

export default Footer; 