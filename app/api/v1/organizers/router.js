const express = require('express');
const router = express();
const {
  createCMSOrganizer,
  createCMSUser,
  getCMSAllOrganizers,
} = require('./controller');
const {
  authenticateUser,
  authorizeRoles,
} = require('../../../middlewares/auth');

router.post(
  '/organizers',
  authenticateUser,
  authorizeRoles('owner'),
  createCMSOrganizer
);
router.get(
  '/organizers',
  authenticateUser,
  authorizeRoles('owner'),
  getCMSAllOrganizers
);
router.post(
  '/users',
  authenticateUser,
  authorizeRoles('organizer'),
  createCMSUser
);

module.exports = router;
