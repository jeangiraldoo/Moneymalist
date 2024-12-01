import { View, Text, StyleSheet } from "react-native";

/**
 * A component that provides an overview of the current month's financial performance.
 * 
 * Features:
 * - Displays the current month and year.
 * - Shows total earnings, expenditures, and net profit.
 * 
 * @component
 * @returns {React.ReactElement} A React Native element displaying the financial overview.
 */
export default function MonthlyOverview(){
   return(
	<View style={styles.overview}>
	  <Text style={styles.title}>Summary for {getCurrentMonth()}</Text>
	  <View style={styles.summaryContainer}>
	    <View style={styles.dataContainer}>
	      <Text style={styles.dataText}>Income</Text>
	      <View style={styles.numberContainer}>
	        <Text style={[styles.number, {color: "green"}]}>$0</Text>
	      </View>
	    </View>
	    <View style={styles.dataContainer}>
	      <Text style={styles.dataText}>Expenses</Text>
	      <View style={styles.numberContainer}>
	        <Text style={[styles.number, {color: "red"}]}>$0</Text>
	      </View>
	    </View>
	    <View style={styles.dataContainer}>
	      <Text style={styles.dataText}>Result</Text>
	      <View style={styles.numberContainer}>
	        <Text style={[styles.number, {color: "white"}]}>$0</Text>
	      </View>
	    </View>
	  </View>
	</View>
   );
}

/**
  * Returns the current month and year as a string.
  * @returns {String} The current month and year in string format.
*/
function getCurrentMonth(){
   const months = ["January", "February", "March", "April", "May", "June",
		   "July", "August", "September", "October", "November",
		   "December"]
   const currentDate = new Date();
   const currentMonth = currentDate.getMonth()
   const currentYear = currentDate.getFullYear()
   return `${months[currentMonth]} ${currentYear}`
}

const styles = StyleSheet.create({
  overview: {
    elevation: 20,
    padding: 20,
    width: "90%",
    height: "17%",
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
  summaryContainer: {
  },
  dataContainer: {
    flexDirection: "row",
  },
});
