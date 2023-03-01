const { createImage } = require('../../../services/mongoose/images');

const create = async (req, res, next) => {
  try {
    console.log(req.file);
    const result = await createImage(req);
    res.status(201).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { create };
