import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "./components/nav"
import MonthlyOverview from "./components/monthly-overview"
import Toolbar from "./components/toolbar"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
	<MonthlyOverview/>
	<Toolbar/>
	<NavBar/>
	<StatusBar style="auto" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
