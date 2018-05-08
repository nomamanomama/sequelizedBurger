// Dependencies
// =============================================================


// Creates a "Burger" model that matches up with DB
module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger",
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

    Burger.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Burger.hasMany(models.Customer, {
            onDelete: "cascade"
        });
    }


    return Burger;

}
