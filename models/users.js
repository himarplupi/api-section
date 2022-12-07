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

const User_Seminar = sequelize.define(
  'users_seminar',
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
    fakultas: {
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

User_Seminar.associate = models => {
  User_Seminar.hasMany(models.Submission, {
    foreignKey: 'emailUsers',
    sourceKey: 'email',
  });
  User_Seminar.hasMany(models.Absensi, {
    foreignKey: 'idUser',
    sourceKey: 'id',
  });
};

const User_BootCamp = sequelize.define(
  'users_bootcamp',
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
    fakultas: {
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

User_BootCamp.associate = models => {
  User_BootCamp.hasMany(models.Submission, {
    foreignKey: 'emailUsers',
    sourceKey: 'email',
  });
  User_BootCamp.hasMany(models.Absensi, {
    foreignKey: 'idUser',
    sourceKey: 'id',
  });
};

const User_Competion = sequelize.define(
  'users_competion',
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
    fakultas: {
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

User_Competion.associate = models => {
  User_Competion.hasMany(models.Submission, {
    foreignKey: 'emailUsers',
    sourceKey: 'email',
  });
  User_Competion.hasMany(models.Absensi, {
    foreignKey: 'idUser',
    sourceKey: 'id',
  });
};

module.exports = {
  User_Seminar,
  User_BootCamp,
  User_Competion,
};
