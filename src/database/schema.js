export default class Schema{
	static initialize(db){
		this.#setupTables(db)
	}
	
	/**
	* Defines the SQL queries that will to set up the database and tables.
	* @param {SQLiteDatabase} Database connection.
  	*/
  	static #setupTables(db) {
    	const queries = [
		  {name: "Foreign keys", query: "PRAGMA foreign_keys = ON;"},
		  {name: "Categories", query: `
			 CREATE TABLE IF NOT EXISTS categories(
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT,
			type TEXT
			 )`},

		  {name: "Items", query: `
			 CREATE TABLE IF NOT EXISTS items(
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			category_id INTEGER,
			name TEXT,
			value INTEGER,
			FOREIGN KEY (category_id) REFERENCES categories(id)
			 )`},

		  {name: "budget", query: `
			 CREATE TABLE IF NOT EXISTS budget(
			category_id INTEGER,
			FOREIGN KEY (category_id) REFERENCES categories(id)
			 )`},

		  {name: "Transactions", query: `
			 CREATE TABLE IF NOT EXISTS transactions(
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			amount INTEGER,
			description TEXT,
			date TEXT
			 )`},

		  {name: "bills", query: `
			 CREATE TABLE IF NOT EXISTS bills(
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			item_id INTEGER,
			name TEXT,
			description TEXT,
			FOREIGN KEY (item_id) REFERENCES items(id)
			 )`},

		  {name: "shoppinglist", query: `
			 CREATE TABLE IF NOT EXISTS shoppinglist(
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT
			 )`}
		  ]

		this.executeSQL(db, queries)
	}
		  
	/**
	* Executes the queries received to set up the database schema.
    * @param {SQLiteDatabase} db - The database connection to execute queries on.
    * @param {Array.<{name: string, query: string}>} An array of objects, each containing
    * a "name" and a "query".
    */
    static executeSQL(db, queries) {
		db.transaction(txn => {
			queries.forEach(({name, query}) => {
	    		txn.executeSql(query, [],
					() => { console.log(`${name} was successfully created`); },
					(error) => { console.log(`An error occurred with ${name}: ${error.message}`); }
					);

			});
		});
	}
}
