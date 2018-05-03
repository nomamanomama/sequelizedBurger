var orm = require('../config/orm.js');

// create the code that will call the ORM functions using burger specific input for the ORM

var burger = {
    selectAll: function (cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    // (table, condition, conditionvalue, updateCol, updateVal, callback)
    updateOne: function (conditionVal, updateCol, updateVal, cb) {
        orm.updateOne('burgers', conditionVal, updateCol, updateVal, function (res) {
            cb(res);
        });
    },
    insertOne: function (value, cb) {
        orm.insertOne('burgers', 'burger_name', value, function (res) {
            cb(res);
        });
    }
}

module.exports = burger;