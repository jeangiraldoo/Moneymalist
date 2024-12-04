import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Overview, MonthlyOverview, FeatureGrid, NavBar, Button } from "./components";

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Overview/>
			<MonthlyOverview/>
			<FeatureGrid/>
			<Button/>
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
