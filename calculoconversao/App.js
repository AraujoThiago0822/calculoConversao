import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import TemperatureConverter from './components/TemperatureConverter';
import SpeedConverter from './components/SpeedConverter';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Calculadora de Conversão</Text>
        <TemperatureConverter />
        <SpeedConverter />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaf4fc',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#136CA4',
    alignSelf: 'center',
  },
});
