const db = require('../config/config');

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  db.development.database,
  db.development.username,
  db.development.password,
  {
    host: db.development.host,
    dialect: db.development.dialect,
    debug: false,
  }
);

const Absensi = sequelize.define(
  'absensi',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idUser: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    idEvent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tanggal: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);

Absensi.associate = function (models) {
  Absensi.belongsTo(models.Users, {
    foreignKey: 'idUser',
    targetKey: 'id',
  });
  Absensi.belongsTo(models.Event, {
    foreignKey: 'idEvent',
    targetKey: 'id',
  });
};

module.exports = Absensi;
