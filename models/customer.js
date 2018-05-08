// Dependencies
// =============================================================


// Creates a "Burger" model that matches up with DB
module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer",
        {
            customer_name: {
                type: DataTypes.STRING,
                validate: {
                    len: [1,32]
                }
            }
        }, 
        {
            timestamps: false
        });

    Customer.associate = function (models) {
        // Associating Customer with Burgers
        // When an Customer is deleted, also delete any associated Posts
        Customer.belongsTo(models.Burger, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    
    return Customer;

}
