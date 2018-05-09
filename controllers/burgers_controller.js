var express = require('express');

var app = express();
var router = express.Router();

var db = require('../models');

// Routes

router.get("/", function (req, res) {
        var burgers = [];
        //get available burgers
        db.Burger.findAll({
                include: [{
                        model: db.Customer
                }],
                order:[['burger_name', 'ASC']]
        })
                .then(function (results) {

                        results.forEach(element => {
                                var isFav = element.Customers.length > 0;
                                var customerList = [];
                                if(isFav){
                                        element.Customers.forEach(item =>{
                                                customerList.push({customer_name: item.customer_name});
                                        });
                                }
                                var burger = {
                                        id: element.id,
                                        burger_name: element.burger_name,
                                        devoured: element.devoured,
                                        favorite: isFav,
                                        customers: customerList
                                };
                                //console.log(burger);
                                burgers.push(burger);
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
        db.Burger.create({
                burger_name: burger.name,
                devoured: false,
                
        }).then(function(results){ 
                res.json(results);
        });
       
});

router.put("/burger/update/:id", function (req, res) {
       
       db.Burger.update(
               {devoured: true},
               {where: 
                        {id: req.params.id}
                }
        )
       .then(function(results){
               res.json(results);
        });
});

router.post("/burger/favorite", function(req,res){
        console.log(req.body.customer_name + " " + req.body.burger_id);
        db.Customer.create({
                customer_name: req.body.customer_name,
                BurgerId: req.body.burger_id
        })
        .then(function(results){
                res.json(results);
        })
});


module.exports = router;