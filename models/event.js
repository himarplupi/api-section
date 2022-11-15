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

const Event = sequelize.define(
  'event',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggalEvent: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
  }
);

Event.associate = models => {
  Event.hasMany(models.Absensi, {
    foreignKey: 'idEvent',
    sourceKey: 'id',
  });
};
module.exports = Event;
