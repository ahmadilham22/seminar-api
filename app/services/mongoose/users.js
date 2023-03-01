const Users = require('../../api/v1/users/model');
const Organizers = require('../../api/v1/organizers/model');
const { BadRequestError } = require('../../errors');
const {} = require('http-status-codes');

const createOrganizer = async (req) => {
  const { organizer, name, email, role, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError('Password yang dimasukan tidak cocok');
  }

  const result = await Organizers.create({ organizer });
  const user = await Users.create({
    name,
    email,
    password,
    organizer: result._id,
    role,
  });
  delete user._doc.password;

  return user;
};

const getAllOrganizers = async (req) => {
  const organizers = await Organizers.find({});

  return organizers;
};

const createUser = async (req, res) => {
  const { name, email, role, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError('Password yang dimasukan tidak cocok');
  }

  const result = await Users.create({
    name,
    email,
    password,
    role,
    organizer: req.user.organizer,
  });

  return result;
};

module.exports = { createOrganizer, createUser, getAllOrganizers };
