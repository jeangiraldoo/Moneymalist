import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';

import BudgetLogo from "./logos/budget"
import GoalLogo from "./logos/goal"
import InvestmentLogo from "./logos/investments"
import EmergencyFundLogo from "./logos/emergency-fund"
import CartLogo from "./logos/cart.js"
import CurrencyConverterLogo from "./logos/currency-converter"
import BillsLogo from "./logos/bills.js"

const featLogoSize = 45

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
	console.log(BudgetLogo)
	return(
		<View style={styles.toolbar}>
	  		<View style={styles.toolbarRow}>
	    		<Pressable style={styles.toolbarButton}>
					<BudgetLogo width={featLogoSize} height={featLogoSize}/>
	      			<Text>Budget</Text>
	    		</Pressable>
	    		<Pressable style={styles.toolbarButton}>
					<CartLogo width={featLogoSize} height={featLogoSize}/>
				  	<Text>Shopping list</Text>
	    		</Pressable>
	    		<Pressable style={styles.toolbarButton}>
					<BillsLogo width={featLogoSize} height={featLogoSize}/>
	      			<Text>Bills</Text>
	    		</Pressable>
	  		</View>
	  		<View style={styles.toolbarRow}>
	    		<Pressable style={styles.toolbarButton}>
					<GoalLogo width={featLogoSize} height={featLogoSize}/>
	      			<Text>Goals</Text>
	    		</Pressable>
	    		<Pressable style={styles.toolbarButton}>
					<EmergencyFundLogo width={featLogoSize} height={featLogoSize}/>
	      			<Text style={{textAlign: "center"}}>Emergency fund</Text>
	    		</Pressable>
	    		<Pressable style={styles.toolbarButton}>
					<CurrencyConverterLogo width={featLogoSize} height={featLogoSize}/>
	      			<Text>Currency converter</Text>
	    		</Pressable>
	  		</View>
	  		<View style={[styles.toolbarRow, {alignSelf: "flex-start"}]}>
	    		<Pressable style={styles.toolbarButton}>
					<InvestmentLogo width={featLogoSize} height={featLogoSize}/>
	      			<Text>Investments</Text>
	    		</Pressable>
			</View>
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
