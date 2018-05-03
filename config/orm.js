var connection = require ('../config/connection.js');


//Object Relational Mapping
var orm = {
    selectAll: function(table, callback){
        var queryString = `SELECT * FROM ${table};`;
        console.log(queryString);
        connection.query(queryString, function (err,res){
            if(err){throw err;}

             callback(res);   
        });
    },

    insertOne: function (table, colname, value, callback) {
        var queryString = `INSERT INTO ${table} (${colname}) VALUES(${value});`;
        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) { throw err; }

            callback(res);
        });
    },

    updateOne: function (table, condition, updateCol, updateVal, callback) {
        var queryString = `UPDATE ${table} SET ${updateCol}='${updateVal}' WHERE ${condition};` ;
        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) { throw err; }

            callback(res);
        });
    }
}

module.exports = orm;