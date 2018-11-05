const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
  name: String,
  age: Number,
  degree: String,
}, {
  timestamps: true,
});

const Teacher = mongoose.model('Teacher', TeacherSchema);

module.exports = Teacher;
