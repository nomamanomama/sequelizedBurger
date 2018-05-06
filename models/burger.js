// Dependencies
// =============================================================


// Creates a "Burger" model that matches up with DB
module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("burger",
        {
            burger_name: {
                type: DataTypes.STRING,
                validate: {
                    len: [1,140]
                }
            },
            devoured: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        }, 
        {
            timestamps: false
        });
    return Burger;

}
