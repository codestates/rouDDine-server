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
    routine_id: DataTypes.STRING,
    order: DataTypes.INTEGER,
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    set_number: DataTypes.INTEGER,
    set_time_min: DataTypes.INTEGER,
    set_time_sec: DataTypes.INTEGER,
    rest_time_min: DataTypes.INTEGER,
    rest_time_sec: DataTypes.INTEGER,
    default: DataTypes.BOOLEAN,
    workoutimage: DataTypes.STRING,
    memo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'exercise',
  });
  return exercise;
};
