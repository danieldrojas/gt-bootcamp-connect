module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define("Category", {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Category.associate = function (models) {
      Category.hasMany(models.Post, {
        onDelete: "cascade",
      });
    };

  return Category;
};
