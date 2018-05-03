var express = require('express');
var burger = require('../models/burger.js');

var app = express();
var router = express.Router();

// Routes

router.get("/", function (req, res) {
        //get available burgers
        burger.selectAll(function (results) {
                console.log(results);
                var burgers = [];
                results.forEach(element => {
                        burgers.push(element);
                });
                var hbrObject = {
                        burgers: burgers
                }
                res.render("index", hbrObject);
        });

}); 

router.post("/burger/create", function (req, res){
        console.log("routed to create path")
        console.log('body: ' + JSON.stringify(req.body));
        burger.insertOne(req.stack.name, function(result) {
                res.json({id: result.insertId});
        });
});

router.put("/burger/update/:id", function (req, res) {
        //(conditionVal, updateCol, updateVal, cb)
        var condition = "id = " + req.params.id;
        burger.updateOne(condition, 'devoured', 1, function (result) {

                if (result.changedRows == 0) {
                        // If no rows were changed, then the ID must not exist, so 404
                        return res.status(404).end();
                } else {
                        res.status(200).end();
                }
        });
});


module.exports = router;