module.exports = function (sequelize, DataTypes) {
    const Category = sequelize.define("Category", {
      category: DataTypes.STRING,
    });
  

    Category.associate = function (models) {
        Category.hasMany(models.Post, {
          onDelete: "cascade",
        });
      };
  
    return Category;
  };