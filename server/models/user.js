'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    mobile: DataTypes.STRING,
    type: DataTypes.STRING,
    address: DataTypes.STRING,
    desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

    
  return User;
};