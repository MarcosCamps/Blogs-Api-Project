"use strict";

const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    "PostCategory",
    {
      postId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "BlogPosts",
          key: "id",
        },
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
      },
    },
    { timestamps: false }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      foreignKey: "postId",
      otherKey: "categoryId",
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      foreignKey: "categoryId",
      otherKey: "postId",
    });
  };
  return PostCategory;
};

module.exports = PostCategory;
