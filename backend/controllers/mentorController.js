// controllers/mentorController.js

const Mentor = require('../models/Mentor');

// @desc   Create a new mentor
const createMentor = async (req, res) => {
  try {
    const { name, email, subject } = req.body;
       console.log({ name, email, subject })
    const newMentor = new Mentor({ name, email, subject });
    await newMentor.save();

    res.status(201).json({ message: 'Mentor created successfully', mentor: newMentor });
  } catch (error) {
    res.status(500).json({ message: 'Error creating mentor', error });
  }
};

// @desc   Get all mentors
const getAllMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching mentors', error });
  }
};

module.exports = { createMentor, getAllMentors };
