var express = require('express');

var app = express();
var router = express.Router();

var db = require('../models');
var burger = require('../models/burger.js');

// Routes

router.get("/", function (req, res) {
        
        console.log('burger: ' + db.Burger);
        //get available burgers
        db.burger.findAll({})
                .then(function (results) {
                        var burgers = [];
                        results.forEach(element => {
                                burgers.push(element);
                        });
                        var hbrObject = {
                                burgers: burgers
                        };
                        res.render("index", hbrObject);
                });

});

router.post("/burger/create", function (req, res){
        // Take the request...
        var burger = req.body;

        // Then add the burger to the database using sequelize
        db.burger.create({
                burger_name: burger.name,
                devoured: false,
                
        }).then(function(results){ 
                res.json(results);
        });
       
});

router.put("/burger/update/:id", function (req, res) {
       
       db.burger.update(
               {devoured: true},
               {where: 
                        {id: req.params.id}
                }
        )
       .then(function(results){
               res.json(results);
        });
});


module.exports = router;