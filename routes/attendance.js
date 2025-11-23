const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Mark attendance
router.post('/', async (req, res) => {
  const { roll, method } = req.body;
  if (!roll) return res.status(400).json({ error: 'roll required' });
  const date = new Date().toISOString();
  try {
    const student = await db.get('SELECT id FROM students WHERE roll = ?', [roll]);
    if (!student) return res.status(404).json({ error: 'student not found' });
    await db.run('INSERT INTO attendance(student_id, method, timestamp) VALUES(?, ?, ?)', [student.id, method || 'manual', date]);
    res.status(201).json({ message: 'Attendance marked', roll, timestamp: date });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'db error' });
  }
});

// Get attendance by roll
router.get('/:roll', async (req, res) => {
  const roll = req.params.roll;
  try {
    const student = await db.get('SELECT id, name, roll FROM students WHERE roll = ?', [roll]);
    if (!student) return res.status(404).json({ error: 'student not found' });
    const records = await db.all('SELECT method, timestamp FROM attendance WHERE student_id = ? ORDER BY timestamp DESC', [student.id]);
    res.json({ student, records });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'db error' });
  }
});

module.exports = router;
