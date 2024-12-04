import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import budgetLogo from "../../../../assets/budget.png"
import goalLogo from "../../../../assets/goal.png"
import investmentLogo from "../../../../assets/investment.png"
import emergencyFundLogo from "../../../../assets/emergency-fund.png"
import shoppingCartLogo from "../../../../assets/shopping-cart.png"
import currencyConverterLogo from "../../../../assets/money-exchange.png"
import billsLogo from "../../../../assets/bills.png"

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
  return(
	<View style={styles.toolbar}>
	  <View style={styles.toolbarRow}>
	    <Pressable style={styles.toolbarButton}>
	      <Image source={budgetLogo} style={styles.image}/>
	      <Text>Budget</Text>
	    </Pressable>
	    <Pressable style={styles.toolbarButton}>
	      <Image source={shoppingCartLogo} style={styles.image}/>
	      <Text>Shopping list</Text>
	    </Pressable>
	    <Pressable style={styles.toolbarButton}>
	      <Image source={billsLogo} style={styles.image}/>
	      <Text>Bills</Text>
	    </Pressable>
	  </View>
	  <View style={styles.toolbarRow}>
	    <Pressable style={styles.toolbarButton}>
	      <Image source={goalLogo} style={styles.image}/>
	      <Text>Goals</Text>
	    </Pressable>
	    <Pressable style={styles.toolbarButton}>
	      <Image source={emergencyFundLogo} style={styles.image}/>
	      <Text style={{textAlign: "center"}}>Emergency fund</Text>
	    </Pressable>
	    <Pressable style={styles.toolbarButton}>
	      <Image source={currencyConverterLogo} style={styles.image}/>
	      <Text>Currency converter</Text>
	    </Pressable>
	  </View>
	  <View style={[styles.toolbarRow, {alignSelf: "flex-start"}]}>
	    <Pressable style={styles.toolbarButton}>
	      <Image source={investmentLogo} style={styles.image}/>
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
