const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Register student
router.post('/', async (req, res) => {
  const { name, roll } = req.body;
  if (!name || !roll) return res.status(400).json({ error: 'name and roll required' });
  try {
    await db.run('INSERT INTO students(name, roll) VALUES(?, ?)', [name, roll]);
    res.status(201).json({ message: 'Student registered', name, roll });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'db error' });
  }
});

module.exports = router;
