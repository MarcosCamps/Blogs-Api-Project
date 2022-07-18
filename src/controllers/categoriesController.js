const { categoryFunction } = require('../services/categoriesService');

const addCategory = async (req, res) => {
  const { name } = req.body;
  const category = await categoryFunction(name);
  res.status(201).json(category);
};

module.exports = { addCategory };
