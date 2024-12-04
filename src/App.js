import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainOverview from "./gui/components/main-overview"
import MonthlyOverview from "./gui/components/monthly-overview"
import Toolbar from "./gui/components/toolbar"
import NavBar from "./gui/components/nav"
import AddButton from "./gui/components/add-button"

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<MainOverview/>
			<MonthlyOverview/>
			<Toolbar/>
			<AddButton/>
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
