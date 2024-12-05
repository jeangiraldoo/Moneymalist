import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

import BudgetLogo from "./logos/budget"
import GoalLogo from "./logos/goal"
import InvestmentLogo from "./logos/investments"
import EmergencyFundLogo from "./logos/emergency-fund"
import CartLogo from "./logos/cart.js"
import CurrencyConverterLogo from "./logos/currency-converter"
import BillsLogo from "./logos/bills.js"

const featLogoSize = 45
const featsPerRow = 3
const feats = [
			{name: "Budget", Logo: BudgetLogo},
			{name: "Shopping list", Logo: CartLogo},
			{name: "Bills", Logo: BillsLogo},
			{name: "Goals", Logo: GoalLogo},
			{name: "Emergency fund", Logo: EmergencyFundLogo},
			{name: "Currency converter", Logo: CurrencyConverterLogo},
			{name: "Investments", Logo: InvestmentLogo}
			];

/**
 * Divides an array into subarrays, each representing a row in a grid.
 *
 * @param {Object[]} featList - The array of objects representing features.
 * @param {number} size - The number of elements per row.
 * @returns {Object[][]} A two-dimensional array where each subarray represents a row in the grid.
 */
const arrangeRows = (featList, size) => {
	return featList.reduce( (resultArray, current_comp, idx) => {
		const row = Math.floor(idx/size);	
		if (!resultArray[row]) resultArray[row] = [];
		resultArray[row].push(current_comp);
		return resultArray;
	}, []);
}


/**
 * A component that arranges a grid with buttons for the app's main features.
 *
 * Features:
 * - Displays a grid of buttons, each navigating to a feature-specific screen.
 *
 * @component
 * @returns {React.ReactElement} A React Native element displaying the feature grid.
 */
export default function FeatureGrid(){
	const rows = arrangeRows(feats, featsPerRow)
	return(
		<View style={styles.toolbar}>
			{rows.map( (row, rowIdx) => (
				<View key={rowIdx} style={[styles.toolbarRow, {alignSelf: "flex-start"}]}>
					{row.map( ({name, Logo} ) => (
						<Pressable key={name} style={styles.toolbarButton}>
							<Logo width={featLogoSize} height={featLogoSize}/>
							<Text style={{textAlign: "center"}}>{name}</Text>
						</Pressable>
					))}
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
  toolbar: {
    marginTop: 60,
    alignItems: "center",
  },
  toolbarRow: {
    flexDirection: "row",
	alignItems: "center",
  },
  image: {
    width: 45,
    height: 45,
  },
  toolbarButton: {
    backgroundColor: "white",
    paddingTop: 5,
    paddingHorizontal: 10,
    margin: 5,
    elevation: 10,
    justifyContent: "center",
    width: "27%",
    height: 90,
    borderRadius: 10,
    alignItems: "center",
  },
});
