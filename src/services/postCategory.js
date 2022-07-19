const { PostCategory, Category } = require('../database/models');
const throwBadRequest = require('../errors/throwBadRequest');

const verifyCategory = async (categoryIds) => {
  const categories = await Promise.all(
    categoryIds.map((id) => Category.findByPk(id)),
  );
  const isValid = categories.every((category) => !!category);
  if (!isValid) {
    throwBadRequest('"categoryIds" not found');
  }
};

const createPostCat = async (categoryIds, postId) => {
  await verifyCategory(categoryIds);
  const postCategories = categoryIds.map((id) => ({
    categoryId: id,
    postId,
  }));
  PostCategory.bulkCreate(postCategories);
};

module.exports = { createPostCat };
