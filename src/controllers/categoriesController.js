const {
  categoryFunction,
  getCategory,
} = require('../services/categoriesService');

const addCategory = async (req, res) => {
  const { name } = req.body;
  const category = await categoryFunction(name);
  res.status(201).json(category);
};

const getCategories = async (_req, res) => {
  const category = await getCategory();
  res.status(200).json(category);
};

module.exports = { addCategory, getCategories };
