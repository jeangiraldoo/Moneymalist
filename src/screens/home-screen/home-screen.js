import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MainOverview from "./main-overview"
import MonthlyOverview from "./monthly-overview"
import Toolbar from "./toolbar"
import NavBar from "./nav"
import AddButton from "./add-button"

export default function HomeScreen() {
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

