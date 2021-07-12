'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  exercise.init({
    userid: DataTypes.STRING,
    category: DataTypes.STRING,
    name: DataTypes.STRING,
    set_number: DataTypes.INTEGER,
    set_time: DataTypes.INTEGER,
    rest_time: DataTypes.INTEGER,
    default : DataTypes.BOOLEAN,
    memo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'exercise',
  });
  return exercise;
};
