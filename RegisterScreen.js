import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function RegisterScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>¡Bienvenido! Empecemos creando tu cuenta</Text>
        <Text style={styles.subtitle}>
          Solo necesitamos tu correo y una contraseña segura.
        </Text>

        {/* Email */}
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="ejemplo@correo.com"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password */}
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#aaa"
          secureTextEntry
          autoCapitalize="none"
        />

        {/* Botón */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>

        {/* Paso */}
        <Text style={styles.stepText}>Paso 1 de 3</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#111827', // bg-gray-900
    padding: 24,
  },
  card: {
    backgroundColor: '#1F2937', // bg-gray-800
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F9FAFB', // text-gray-100
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#D1D5DB', // text-gray-300
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    color: '#E5E7EB', // text-gray-200
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#374151', // bg-gray-700
    color: '#F3F4F6', // text-gray-100
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6366F1', // bg-indigo-500
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  stepText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#9CA3AF', // text-gray-400
    fontSize: 14,
  },
});
