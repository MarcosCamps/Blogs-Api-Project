const { Category } = require('../database/models');
const throwBadRequest = require('../errors/throwBadRequest');

const categoryFunction = async (name) => {
  if (!name) {
    throwBadRequest('"name" is required');
  }
  const category = await Category.create(
    {
      name,
    },
    {
      raw: true,
    },
  );
  return category;
};

const getCategory = async () => {
  const category = await Category.findAll({ raw: true });
  return category;
};

module.exports = { categoryFunction, getCategory };
