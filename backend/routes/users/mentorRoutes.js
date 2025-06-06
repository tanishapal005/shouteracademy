

// routes/users/mentorRoutes.js

const express = require('express');
const { createMentor, getAllMentors } = require('../../controllers/mentorController');
const Mentor = require('../../models/Mentor');
const router = express.Router();

// ✅ POST /api/users
// router.post('/', (req, res) => {
//   const userData = req.body;
//   console.log('User data received:', userData);
//   res.status(201).json({ message: 'User created successfully' });
// });

// router.post('/',createMentor)


router.post('/',async (req, res) => {
  try {
    const newUser = new Mentor(req.body); // assumes req.body has correct keys
    await newUser.save();
    res.status(201).json({ message: 'User saved successfully!' });
  } catch (error) {
    console.error('Save error:', error);
    res.status(500).json({ error: 'User could not be saved.' });
  }
})

router.get('/',async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching mentors', error });
  }
})

module.exports = router;
