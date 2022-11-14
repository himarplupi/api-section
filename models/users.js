const { Sequlize, DataTypes } = require('sequelize');
const sequelize = new Sequlize('sqlite::memory:');

module.exports = function(sequelize, DataTypes){
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID, //DataTypes.INTEGER
      defaultValue: DataTypes.UUIDV4, //autoIncrement: true
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jk: {
      type: DataTypes.ENUM('L', 'P'),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    noWhatsapp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    institusi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    division: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return User
}
