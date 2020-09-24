const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  sem: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  clgname: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  contactno: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model('user', UserSchema);
