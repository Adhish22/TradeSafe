// import React,{useState} from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';
// import {TextInput} from 'react-native-paper';
//
// const Login = () => {
//   const [Username,setUsername] = useState("")
//   const [Password,setPassword] = useState("")
//   const [Modal,setModal] = useState("")
//   return(
//     <View style={styles.root}>
//       <TextInput
//         label='Username'
//         style={styles.inputStyle}
//         theme={theme}
//         value={Username}
//         mode="outlined"
//         onChangeText={text => setUsername(text)}
//       />
//
//       <TextInput
//         label='Password'
//         style={styles.inputStyle}
//         theme={theme}
//         value={Password}
//         mode="outlined"
//         onChangeText={text => setPassword(text)}
//       />
//     </View>
//   )
// }
//
// const theme = {
//   colors:{
//   primary:"#006aff"
//   }
// }
//
// const styles=StyleSheet.create({
//   root:{
//     flex: 1
//   },
//   inputStyle:{
//     margin:5
//   }
// })
//
// export default Login
