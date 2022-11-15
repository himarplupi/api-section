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

const Submission = sequelize.define(
  'submission',
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
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Submission.associate = models => {
  Submission.belongsTo(models.Users, {
    foreignKey: 'idUser',
    targetKey: 'id',
  });
};

module.exports = Submission;
