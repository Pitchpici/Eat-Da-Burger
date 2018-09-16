const connection = require("./connection");

var orm = {

  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(burgerName, devoured, cb) {
    var queryString = "INSERT INTO burgers SET ?";
    console.log(queryString);

    connection.query(queryString, [{
    	burger_name: burgerName,
    	devoured: devoured
    }], function(err, result) {
      if (err) throw err;

      cb(result);
    });
  },

  updateOne: function(burgerName, devoured, cb) {
    var queryString = "UPDATE burger SET ? WHERE ?";
    console.log(queryString);

    connection.query(
      queryString,
      [{
      	devoured: devoured
      },
      {
      	burger_name: burgerName
      }],
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

module.exports = orm;
