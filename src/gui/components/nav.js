import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import homeLogo from "../../../assets/home.png"
import transactionLogo from "../../../assets/transactions.png"


/**
 * Navigation bar component that highlights one of its button when clicked.
 *
 * - The selected button is visually highlighted using a background color.
 * - Uses internal state to track which button is currently selected.
*/
export default function navBar(){
  const [clickedBtnID, setClickedBtnID] = useState(0)
  return (
     <View style={styles.nav}>
	<Pressable onPress={() => setClickedBtnID(0)}
		   style={getStyleButton(0, clickedBtnID)}>
	  <Image source={homeLogo} style={styles.image}/>
	  <Text style={styles.text}>Home</Text>
      	</Pressable>
      	<Pressable onPress={() => setClickedBtnID(1)} style={getStyleButton(1, clickedBtnID)}>
	  <Image source={transactionLogo} style={styles.image}/>
	  <Text style={styles.text}>Transactions</Text>
      	</Pressable>
      </View>
  );
}

/**
 * Retrieves the style to be applied to a button based on its ID and the currently clicked button's ID.
 * 
 * @param {Number} btnID - The ID of the button to be styled.
 * @param {Number} clickedBtnID - The ID of the currently clicked button.
 * @returns {Array} - An array of styles to apply to the button.
 */
function getStyleButton(btnID, clickedBtnID){
	return [styles.navButton, clickedBtnID === btnID ? { backgroundColor: "hsl(0, 0%, 90%)" } : {}]
}

const styles = StyleSheet.create({
  image: {
    width: 22,
    height: 22,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
  },
  navButton: {
    justifyContent: "center",
    width: "40%",
    height: 50,
    borderRadius: 15,
    alignItems: "center",
  },
  nav: {
    elevation: 5,
    shadowRadius: 100,
    borderRadius: 15,
    borderWidth: 0.4,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    backgroundColor: "white",
    flexDirection: "row",
    width: "80%",
    height: 60,
  },
});

