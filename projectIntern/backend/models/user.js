// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,

  },
  age: {
    type: Number,

  },
  email: {
    type: String,
    unique: true
  },
  avatarUrl: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);
