import React, { useRef } from 'react';
import { ScrollView, ScrollViewProps, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ParallaxScrollViewProps extends ScrollViewProps {
  headerBackgroundColor?: string;
  headerHeight?: number;
  headerContent?: React.ReactNode;
}

export function ParallaxScrollView({
  headerBackgroundColor = '#fff',
  headerHeight = 200,
  headerContent,
  children,
  style,
  ...props
}: ParallaxScrollViewProps) {
  const scrollViewRef = useRef<ScrollView>(null);
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { backgroundColor: headerBackgroundColor }]}>
      <ScrollView
        ref={scrollViewRef}
        style={[styles.scrollView, style]}
        contentContainerStyle={[
          styles.contentContainer,
          { paddingTop: headerHeight + insets.top }
        ]}
        {...props}
      >
        {children}
      </ScrollView>
      <View style={[styles.header, { height: headerHeight + insets.top }]}>
        {headerContent}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});
