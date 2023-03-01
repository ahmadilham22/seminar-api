const {
  createOrganizer,
  createUser,
  getAllOrganizers,
} = require('../../../services/mongoose/users');
const { StatusCodes } = require('http-status-codes');

const createCMSOrganizer = async (req, res, next) => {
  try {
    const result = await createOrganizer(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getCMSAllOrganizers = async (req, res, next) => {
  try {
    const result = await getAllOrganizers(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const createCMSUser = async (req, res, next) => {
  try {
    const result = await createUser(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createCMSOrganizer,
  createCMSUser,
  getCMSAllOrganizers,
};
