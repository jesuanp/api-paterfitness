const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('usuario', {
        
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        password: {
          type: DataTypes.STRING,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
      });
}