"use strict";

const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    "BlogPost",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      published: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    { timestamps: false }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreingKey: "userId",
      as: "user",
    });
  };

  return BlogPost;
};

module.exports = BlogPost;
