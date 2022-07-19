const { creatingPost } = require('../services/postService');
const { createPostCat } = require('../services/postCategory');
const { postSchema } = require('../schemas/postSchema');
const throwBadRequest = require('../errors/throwBadRequest');

const createPosts = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req;
  const { error } = postSchema.validate({
    title,
    content,
    categoryIds,
  });
  if (error) {
    return throwBadRequest(error.message);
  }
  const post = await creatingPost(title, content, userId);
  await createPostCat(categoryIds, post.dataValues.id);
  res.status(201).json(post);
};

module.exports = { createPosts };
