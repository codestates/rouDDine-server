'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    social: DataTypes.STRING,
    socialid: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    height: DataTypes.STRING,
    weigt: DataTypes.STRING,
    profileimage: DataTypes.STRING,
    total_time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};

