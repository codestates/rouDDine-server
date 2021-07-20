'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class routine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  routine.init({
    name: DataTypes.STRING,
    userid: DataTypes.STRING,
    finished_time: DataTypes.INTEGER,
    total_time: DataTypes.INTEGER,
    finished_total_time:DataTypes.INTEGER,
    default: DataTypes.BOOLEAN,
    routineimage: DataTypes.STRING,
    share: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'routine',
  });
  return routine;
};
