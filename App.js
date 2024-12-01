import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainOverview from "./components/main-overview"
import MonthlyOverview from "./components/monthly-overview"
import Toolbar from "./components/toolbar"
import NavBar from "./components/nav"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
	<MainOverview/>
	<MonthlyOverview/>
	<Toolbar/>
	<NavBar/>
	<StatusBar style="auto" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
