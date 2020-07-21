module.exports = function (sequelize, DataTypes) {
  const Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false},
    body: {
      type: DataTypes.TEXT,
      allowNull: false}
  });

  Post.associate = function (models) {
    Post.belongsTo(models.User, {
      allowNull: false,
      foreignKey: {
        allowNull: false,
      },
    });
  };

  Post.associate = function (models) {
    Post.belongsTo(models.Category, {
      allowNull: false,
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Post;
};
