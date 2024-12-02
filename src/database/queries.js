import SQLite from "react-native-sqlite-storage";
import schema from "./schema";

const db = SQLite.OpenDatabase(
	{ name: "moneymalist.db", location: "default"}
	);

schema.initialize(db)
