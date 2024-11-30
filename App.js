import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import NavBar from "./components/nav"
//import homeLogo from "./assets/home.png"
//import transactionLogo from "./assets/transactions.png"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Moneymalist!</Text>
      <NavBar/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
