import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [result, setResult] = useState('');

  function convertTemperature() {
    if (celsius === '' || isNaN(celsius)) {
      setResult('');
      return;
    }
    const f = (parseFloat(celsius) * 9/5) + 32;
    setResult(f.toFixed(4)); // Máximo de 4 dígitos decimais
  }

  return (
    <View style={styles.block}>
      <Text style={styles.title}>Temperatura</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite valor em °C"
        value={celsius}
        onChangeText={setCelsius}
      />
      <Button title="Converter para °F" color="#136CA4" onPress={convertTemperature} />
      {result !== '' && (
        <Text style={styles.result}>{celsius} °C = {result} °F</Text>
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
    shadowColor: '#136CA4',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#136CA4',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#136CA4',
    marginBottom: 10,
    fontSize: 16,
    padding: 4,
  },
  result: {
    marginTop: 10,
    fontSize: 16,
    color: '#136CA4',
  },
});
