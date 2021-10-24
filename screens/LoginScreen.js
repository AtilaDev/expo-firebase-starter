import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { View, TextInput, Logo, Button } from '../components';
import { Images, Colors } from '../config';
import { useTogglePasswordVisibility } from '../hooks';

export const LoginScreen = ({ navigation }) => {
  const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();

  return (
    <>
      <View isSafe style={styles.container}>
        {/* LogoContainer: consits app logo and screen title */}
        <View style={styles.logoContainer}>
          <Logo uri={Images.logo} />
          <Text style={styles.screenTitle}>Welcome back!</Text>
        </View>
        {/* Input fields */}
        <TextInput
          name='email'
          leftIconName='email'
          placeholder='Enter email'
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
          autoFocus={true}
        />
        <TextInput
          name='password'
          leftIconName='key-variant'
          placeholder='Enter password'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={passwordVisibility}
          textContentType='password'
          rightIcon={rightIcon}
          handlePasswordVisibility={handlePasswordVisibility}
        />
        {/* Login button */}
        <Button style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
        {/* Button to navigate to SignupScreen to create a new account */}
        <Button
          style={styles.borderlessButtonContainer}
          borderless
          title={'Create a new account?'}
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
      {/* App info footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Expo Firebase Starter App (based on managed workflow)
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 12
  },
  logoContainer: {
    alignItems: 'center'
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.black,
    paddingTop: 20
  },
  footer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
    paddingBottom: 48,
    alignItems: 'center'
  },
  footerText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.orange
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: Colors.orange,
    padding: 10,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '700'
  },
  borderlessButtonContainer: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
