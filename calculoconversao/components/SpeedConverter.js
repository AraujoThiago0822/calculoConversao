import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SpeedConverter() {
  const [kmh, setKmh] = useState('');
  const [mph, setMph] = useState('');

  function convertSpeed() {
    if (kmh === '' || isNaN(kmh)) {
      setMph('');
      return;
    }
    const conv = parseFloat(kmh) / 1.60934;
    setMph(conv.toFixed(4)); // Máximo de 4 dígitos decimais
  }

  return (
    <View style={styles.block}>
      <Text style={styles.title}>Velocidade</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite valor em km/h"
        value={kmh}
        onChangeText={setKmh}
      />
      <Button title="Converter para mph" color="#136CA4" onPress={convertSpeed} />
      {mph !== '' && (
        <Text style={styles.result}>{kmh} km/h = {mph} mph</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#FF914D',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#FF914D',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF914D',
    marginBottom: 10,
    fontSize: 16,
    padding: 4,
  },
  result: {
    marginTop: 10,
    fontSize: 16,
    color: '#FF914D',
  },
});
