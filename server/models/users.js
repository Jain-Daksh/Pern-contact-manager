'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false
    },
    age: DataTypes.INTEGER,
    mobile: {
      type:DataTypes.STRING,
      allowNull: false
    },
    type: {
      type:DataTypes.STRING,
      allowNull: true
    },
    address: {
      type:DataTypes.STRING,
      allowNull: true
    },
    desc: {
      type:DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return Users;
};