const router = require('express').Router();
const Teacher = require('../../models/mongo_mappers/teacher');

const getTeachers = (req, res) => {
  Teacher
    .find()
    .then((teachers) => {
      res.send({
        teachers,
      });
    })
    .catch((err) => {
      res.status(500).send({
        error: err.message || 'Error retrieving teachers',
      });
    });
};

const createTeacher = (req, res) => {
  const { name, age, degree } = req.body;
  const data = {
    name,
    age,
    degree,
  };
  const newTeacher = new Teacher(data);
  newTeacher
    .save()
    .then((teacher) => {
      res.send({
        message: 'Teacher added successfully',
        teacher,
      });
    })
    .catch((err) => {
      res.status(500).send({
        error: err.message || 'Error adding teacher',
      });
    });
};

router.get('/', getTeachers);
router.post('/', createTeacher);

module.exports = router;
