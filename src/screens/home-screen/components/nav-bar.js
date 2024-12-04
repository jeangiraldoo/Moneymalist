import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { SvgXml } from 'react-native-svg';

/**
 * Navigation bar component that highlights one of its button when clicked.
 *
 * - The selected button is visually highlighted using a background color.
 * - Uses internal state to track which button is currently selected.
*/
export default function NavBar(){
	const [clickedBtnID, setClickedBtnID] = useState(0)
	return (
		<View style={styles.nav}>
			<Pressable onPress={() => setClickedBtnID(0)}
		   		   	   style={getStyleButton(0, clickedBtnID)}>
				<SvgXml xml={homeLogo} width="22" height="22" />
	  			<Text style={styles.text}>Home</Text>
      		</Pressable>
      		<Pressable onPress={() => setClickedBtnID(1)} style={getStyleButton(1, clickedBtnID)}>
				<SvgXml xml={ledgerLogo} width="22" height="22" />
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

const homeLogo = `
	<?xml version="1.0" encoding="iso-8859-1"?>
	<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
	<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px"
		viewBox="0 0 495.398 495.398" xml:space="preserve">
	<g>
		<g>
			<g>
				<path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391
					-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391v29.941L299.31,
					37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,
					11.104-11.082,29.071,0,40.158c11.087,11.101,29.089,11.101,40.172,
					0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,
					187.747c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,
					20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"/>
				<path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,
					296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401c0,28.253,
					22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,
					0,51.159-22.907,51.159-51.159V306.79c0-3.713-1.465-7.271-4.085-9.877
					L257.561,131.836z"/>
			</g>
		</g>
	</g>
	</svg>`;

const ledgerLogo = `
	<?xml version="1.0" encoding="utf-8"?>
	<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
	<svg width="800px" height="800px" viewBox="-2 0 32 32"
		 xmlns="http://www.w3.org/2000/svg">
	  <g id="Lager_54" data-name="Lager 54" transform="translate(-2)">
		<g id="Group_19" data-name="Group 19">
		  <path id="Path_62" data-name="Path 62" d="M28,0H6A4,4,0,0,0,2,4V28a4,4,0,0,
				0,4,4H28a2,2,0,0,0,2-2V2A2,2,0,0,0,28,0ZM26,27a1,1,0,0,1-1,
				1H7.98A1.979,1.979,0,0,1,6,26.02v-.04A1.979,1.979,0,0,1,7.98,24H25a1,
				1,0,0,1,1,1Zm0-7.937a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1V5a1,1,0,0,1,
				1-1H25a1,1,0,0,1,1,1Z" fill="#040505"/>
		  <rect id="Rectangle_19" data-name="Rectangle 19" width="8" height="4" rx="1"
				transform="translate(14 8)" fill="#040505"/>
		</g>
	  </g>
	</svg>`;
