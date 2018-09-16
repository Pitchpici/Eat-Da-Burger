const connection = require("./connection");

var orm = {

  selectAll: function() {
    var queryString = "SELECT * FROM burgers";

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  insertOne: function(burgerName, devoured) {
    var queryString = "INSERT INTO burgers SET ?";
    console.log(queryString);

    connection.query(queryString, [{
    	burger_name: burgerName,
    	devoured: devoured
    }], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  updateOne: function(burgerName, devoured) {
    var queryString = "UPDATE burger SET ? WHERE ?";

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
        console.log(result);
      }
    );
  }
};

module.exports = orm;
