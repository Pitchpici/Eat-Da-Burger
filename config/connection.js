const mysql = require("mysql");

const connection = mysql.createConnection({
	host: localhost,
	port: 3306,
	user: "root",
	password: "",
	database: "burger_database"
});

connection.connect(function(err) {
	if (err) {
		console.log("error connecting" + err.stack);
		return;
	}

	console.log("connected as id: " + connection.threadId);
});

module.exports = connection;