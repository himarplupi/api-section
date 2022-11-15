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

const Users = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.UUID, //DataTypes.INTEGER
      defaultValue: DataTypes.UUIDV4, //autoIncrement: true
      primaryKey: true,
      allowNull: false,
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
  },
  {
    timestamps: true,
  }
);

Users.associate = models => {
  Users.hasMany(models.Submission, {
    foreignKey: 'emailUsers',
    sourceKey: 'email',
  });
  Users.hasMany(models.Absensi, {
    foreignKey: 'idUser',
    sourceKey: 'id',
  });
};

module.exports = Users;
