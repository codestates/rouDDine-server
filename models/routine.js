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
    share: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'routine',
  });
  return routine;
};