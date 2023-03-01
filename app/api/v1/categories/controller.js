const {
  getAllCategories,
  createCategories,
  getOneCategories,
  updateCategories,
  destroyCategories,
} = require('../../../services/mongoose/categories');

const create = async (req, res, next) => {
  try {
    const result = await createCategories(req);
    res.status(201).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllCategories(req);
    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const find = async (req, res, next) => {
  try {
    const result = await getOneCategories(req);
    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    //* Cara 1
    // const checkCategories = await Categories.findById(id);

    // if (!checkCategories) {
    //   return res.status(404).json({
    //     message: 'Id categories tidak ditemukan ',
    //   });
    // }

    // checkCategories.name = name;
    // await checkCategories.save();

    //* Cara 2
    const result = await updateCategories(req);

    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await destroyCategories(req);
    res.status(200).json({
      message: `berhasil menghapus kategori dengan nama :  ${result.name}`,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  index,
  find,
  update,
  destroy,
};
