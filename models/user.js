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
        len: [8],
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    github: DataTypes.STRING,
    linkedIn: DataTypes.STRING,
    bootcamp: DataTypes.STRING,
    gradDate: DataTypes.STRING,
    location: DataTypes.STRING,
    bio: DataTypes.STRING
  });
  
  User.associate = function (models) {
    User.hasMany(models.Post, {
      onDelete: "cascade",
    });
  };

  User.prototype.validPassword = (password) => {
    console.log("bcrypt compareSuync")
    return bcrypt.compareSync(password, this.password);
  };

  User.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    )
  });


  return User;
};

//
