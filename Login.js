import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [backendError, setBackendError] = useState(null);

  const handleLogin = () => {
    setIsSubmitting(true);
    setBackendError(null);

    // Simulación de autenticación fallida
    setTimeout(() => {
      setIsSubmitting(false);
      setBackendError('Credenciales incorrectas. Intenta de nuevo.');
    }, 1500);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>Inicia sesión en tu cuenta</Text>
        <Text style={styles.subtitle}>
          Aprende, comparte y crece junto a una comunidad que ama el conocimiento.
        </Text>

        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="ejemplo@correo.com"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#aaa"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />

        {backendError && (
          <Text style={styles.backendError}>{backendError}</Text>
        )}

        <TouchableOpacity>
          <Text style={styles.forgotLink}>
            ¿Olvidaste tu contraseña? Recupérala en segundos.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, isSubmitting && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          )}
        </TouchableOpacity>
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
    marginBottom: 12,
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
    marginTop: 12,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotLink: {
    textAlign: 'center',
    color: '#818CF8', // text-indigo-400
    marginBottom: 16,
    fontSize: 14,
  },
  backendError: {
    color: '#EF4444', // text-red-500
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 16,
    fontWeight: '500',
  },
});
