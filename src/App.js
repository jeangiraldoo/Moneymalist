import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen } from "./screens/home-screen";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<HomeScreen/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
