const { BlogPost } = require('../database/models');

const creatingPost = async (title, content, userId) => {
  const post = await BlogPost.create({
    title,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  });
  return post;
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({ where: { id }, raw: true });
  return post;
};

module.exports = { creatingPost, getPostById };
