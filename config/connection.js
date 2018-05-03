var mysql = require('mysql');

var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "oldNEW47",
        database: "burger_db"
});

connection.connect(function(err){
        if(err) {
                console.log("something went wrong with DB connection. Unable to connect.", err);
        } else {
                console.log("connected with id: " + connection.threadId);
        }
});

module.exports = connection;