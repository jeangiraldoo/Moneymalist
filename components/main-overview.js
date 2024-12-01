import { StyleSheet, Text, View } from 'react-native';

/**
 * A component that provides an overview of the user's current balance.
 *
 * Features:
 * - Displays the current balance in a user-friendly format.
 *
 * @component
 * @returns {React.ReactElement} A React Native element displaying the balance overview.
 */
export default function MainOverview() {
   return(
	<View style={styles.overview}>
	  <Text style={styles.title}>Balance</Text>
	  <View style={styles.dataContainer}>
	    <Text style={styles.dataText}>Total</Text>
	    <View style={styles.numberContainer}>
	      <Text style={[styles.number, {color: "green"}]}>$0</Text>
	    </View>
	  </View>
	</View>
   );
}

const styles = StyleSheet.create({
  overview: {
    elevation: 20,
    padding: 20,
    marginBottom: 20,
    width: "90%",
    height: "11%",
    backgroundColor: "hsl(0, 0%, 60%)",
    borderRadius: 10,
  },
  numberContainer: {
    alignItems: "center",
    width: "50%",
  },
  title: {
    fontSize: 20,
  },
  dataText: {
    fontSize: 17,
    width: "25%",
  },
  dataContainer: {
    flexDirection: "row",
  },
});
