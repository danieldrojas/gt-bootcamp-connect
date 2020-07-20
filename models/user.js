const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    github: DataTypes.STRING,
    linkedIn: DataTypes.STRING,
    bootcamp: DataTypes.STRING,
    gradDate: DataTypes.STRING,
    location: DataTypes.STRING,
  });

  User.prototype.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password);
  };

  User.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    )
  });

  User.associate = function (models) {
    User.hasMany(models.Post, {
      onDelete: "cascade",
    });
  };

  return User;
};

//
