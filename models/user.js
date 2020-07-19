  
module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      github: DataTypes.STRING,
      linkedIn: DataTypes.STRING,
      bootcamp: DataTypes.STRING,
      gradDate: DataTypes.STRING,
      location: DataTypes.STRING,
    });
  
    User.associate = function (models) {
      User.hasMany(models.Post, {
        onDelete: "cascade",
      });
    };

  
    return User;
  };

  // 