import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

const image = { uri: "https://images.pexels.com/photos/102152/pexels-photo-102152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" };

const Login = () => {
  const [username, onChangeUsername] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const onPressLogin = () => {}
  const onPressSignup = () => {}

  return (
    <View style={styles.container}>
     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.card}>
       <Text style={styles.title}>TradeSafe</Text>
       <TextInput style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="Enter Username"
        placeholderTextColor='grey'/>
       <TextInput style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Enter Password"
        placeholderTextColor='grey'/>
      </SafeAreaView>
      <TouchableOpacity style={styles.button}
       onPress={onPressLogin}>
        <Text> Log in </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
       onPress={onPressSignup}>
        <Text> Create account </Text>
      </TouchableOpacity>
     </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#000000c0',
  },
  title: {
    color: 'white',
    fontSize: 40,
    lineHeight: 80,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color:'white',
    borderColor: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 10,
    marginHorizontal: 120,
    marginTop: 20,
  }
});

export default Login;
