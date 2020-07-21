module.exports = function (sequelize, DataTypes) {
  const Post = sequelize.define("Post", {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
  });

  Post.associate = function (models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  Post.associate = function (models) {
    Post.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Post;
};
