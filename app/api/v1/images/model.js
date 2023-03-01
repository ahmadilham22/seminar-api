const mongoose = require('mongoose');
const { Schema, model } = mongoose;

let imageSchema = Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = model('Image', imageSchema);
