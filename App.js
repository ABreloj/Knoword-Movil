import React, { useState } from 'react';
import { View, Button } from 'react-native';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './Login';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {showLogin ? <LoginScreen /> : <RegisterScreen />}
      <Button
        title={showLogin ? 'Ir a Registro' : 'Ir a Login'}
        onPress={() => setShowLogin(!showLogin)}
      />
    </View>
  );
}
