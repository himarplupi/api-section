const { Sequlize, DataTypes } = require('sequelize');
const sequelize = new Sequlize('sqlite::memory:');
//const usersModel = require('users');
//const eventModel = require('event');

module.exports = function(sequelize, DataTypes){
  const Absensi = sequelize.define('Absensi', {
    idUser: {
      type: DataTypes.UUID,
      references: 'users',
      referencesKey: 'id',
      allowNull: false,
    },
    idEvent: {
      type: DataTypes.INTEGER,
      references: 'events',
      referencesKey: 'id',
      allowNull: false,
    },
    tanggal: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },{
    noPrimaryKey: true,
  });
  return Absensi;
}