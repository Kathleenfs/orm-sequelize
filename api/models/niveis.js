'use strict';
const {
  Model
} = require('sequelize');
const pessoas = require('./pessoas');
const turmas = require('./turmas');
module.exports = (sequelize, DataTypes) => {
  class Niveis extends Model {
  
    static associate(models) {
    Niveis.hasMany(models.Turmas,{foreignKey: 'nivel_id'})
    }
  }
  Niveis.init({
    descr_nivel: DataTypes.STRING
  },{paranoid:true}, {
    sequelize,
    modelName: 'Niveis',
  });
  return Niveis;
};
