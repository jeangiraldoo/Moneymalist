import React, { useState } from "react";
import { Animated, StyleSheet, View, Text, Pressable } from "react-native";
import { SvgXml } from 'react-native-svg';

const addIncomeLogo = `<?xml version="1.0" encoding="utf-8"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
xmlns="http://www.w3.org/2000/svg"><path d="M8 12H16M22 12C22 17.5228 17.5228 22 12
22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const mainLogo = `<?xml version="1.0" encoding="utf-8"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
xmlns="http://www.w3.org/2000/svg"> <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228
22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const btnSize = 60

// Buttons available with their respective positions within the component
const btns_pos = {
	MAIN: 0,
	ADD_INCOME: 1,
	ADD_EXPENSE: 2
}

/**
 * Button component that triggers a transaction creation process.
 * 
 * When clicked:
 * - An animation runs on the button's image.
 * - Two auxiliary buttons are displayed, allowing the user to add either
 *   an income or an expense transaction.
 */
export default function AddButton() {
	const [clickedBtn, setClickedBtn] = useState(false)

	const animStartVal = 0, animEndVal = 1
	const mainAnimVal = React.useRef(new Animated.Value(animStartVal)).current;
	const auxAnim1Val = React.useRef(new Animated.Value(animStartVal)).current;
	const auxAnim2Val = React.useRef(new Animated.Value(animStartVal)).current;

	/**
	 * Returns the interpolated value used for animating a button.
	 *
	 * @param {number} btnPos - The button index to retrieve the interpolated value for.
	 * @returns {number|string} The interpolated value for the specified button.
	 */
	const getInterpolatedVal = (btnPos) => {
		if (btnPos === 0) {
			val = getDegreeInterpolatedVal()
		} else {
			val = getNumInterpolatedVal(btnPos)
		}
		return val
	}

	/**
	 * Gets the numeric interpolated value for a button.
	 *
	 * @param {number} btnPos - The button index.
	 * @returns {number} The interpolated numeric value for the button.
	 */
	const getNumInterpolatedVal = (btnPos) => {
		if (btnPos === 1) {
			variable = auxAnim1Val
		} else {
			variable = auxAnim2Val
		}

		num = variable.interpolate({
			inputRange: [animStartVal, animEndVal],
			outputRange: [0, 1]
		});
		return num
	}

	/**
	 * Gets the interpolated value for a button, expressed in degrees.
	 *
	 * @param {number} btnPos - The button index.
	 * @returns {string} The interpolated value as a degree (e.g., "45deg").
	 */
	const getDegreeInterpolatedVal = () => {
		degree = mainAnimVal.interpolate({
			inputRange: [animStartVal, animEndVal],
			outputRange: ["0deg", "135deg"]
		});
		return degree
	}

	/**
	 * Starts the animation for each button by transitioning their current animated value to
	 * the specified final value.
	 * 
	 * Animations applied:
	 * - Rotates the image in the main button.
	 * - Scales the "Add Income" and "Add Expense" buttons from 0 to their maximum size, making
	 *   them pop up onto the screen.
	 * 
	 * @param {number} finalValue - The target value to which the animation should transition. 
	 */
	const startAnims = (finalValue) => {
		const mainAnim = {variable: mainAnimVal, duration: 200}
		const aux1Anim = {variable: auxAnim1Val, duration: 150}
		const aux2Anim = {variable: auxAnim2Val, duration: 220}
		const anims = [mainAnim, aux1Anim, aux2Anim]

		anims.forEach((obj) => {
			const anim_config = {toValue: finalValue,
							 	 duration: obj.duration,
							  	 useNativeDriver: true,}
			Animated.timing(obj.variable, anim_config).start()
		})
	}
	
	/**
	 * Returns the style to be applied to the View that contains an auxiliary button.
	 *
	 * @param {boolean} clickedBtn - Whether the main button was clicked or not.
 	 * @param {number} containerPos - Position of the button container within the overall
	 * component layout.
	 * @returns {Object} Styles object to be applied to the button container.
	 */
	const getBtnContainerStyle = (clickedBtn, containerPos) => {
		const btnSpacing = 5
		if (containerPos === 1) {
			position = (btnSize + btnSpacing) * -1
		}else {
			pos_btn1 = btnSize + btnSpacing
			position = (pos_btn1 + btnSize + btnSpacing) * -1
		}

		return {position: "absolute", top: position, flexDirection: "row",
				alignItems: "center", justifyContent: "space-between",
				display: clickedBtn ? "flex": "none"}
	}

	return (
		<View style={styles.buttonContainer}>
			<View style={getBtnContainerStyle(clickedBtn, btns_pos.ADD_EXPENSE)}>
				<Text>Add income</Text>
				<Pressable style={styles.auxiliaryButton}>
					<Animated.View style={{transform: [{ scale: getInterpolatedVal(btns_pos.ADD_EXPENSE) }]}}>
						<SvgXml xml={mainLogo} width="60" height="60" />
					</Animated.View>
				</Pressable>
			</View>
			<View style={getBtnContainerStyle(clickedBtn, btns_pos.ADD_INCOME)}>
				<Text>Add expense</Text>
				<Pressable style={[styles.auxiliaryButton]}>
					<Animated.View style={{transform: [{ scale: getInterpolatedVal(btns_pos.ADD_INCOME)}]}}>
						<SvgXml xml={addIncomeLogo} width="60" height="60" />
					</Animated.View>
				</Pressable>
			</View>
			<Pressable style={[styles.button, clickedBtn && {opacity: 0.5}]}
					   onPress={() => {setClickedBtn((prevState) => {
											const newState = !prevState;
											const finalValue = newState ? animEndVal: animStartVal
											startAnims(finalValue)
											return newState;
          			   				  });
								}}>
				<Animated.View style={{transform: [{ rotate: getInterpolatedVal(btns_pos.MAIN)}]}}>
						<SvgXml xml={mainLogo} width="60" height="60" />
				</Animated.View>

			</Pressable>
		</View>
	);
}


const styles = StyleSheet.create({
	buttonContainer: {
		marginTop: 50,
		alignItems: "flex-end",
		width: "90%",
		height: 80,
	},
	image: {
		width: btnSize,
		height: btnSize,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
	},
	auxiliaryButton: {
		marginLeft: "2%",
	},
});

styles.button = { ...styles.image, ...styles.button }
styles.auxiliaryButton = { ...styles.button, ...styles.auxiliaryButton }
