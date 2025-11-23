const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

const studentsRouter = require('../routes/students');
const attendanceRouter = require('../routes/attendance');

const app = express();
app.use(bodyParser.json());
app.use('/students', studentsRouter);
app.use('/attendance', attendanceRouter);

describe('Basic API', () => {
  test('register, mark and fetch attendance', async () => {
    const roll = 'TEST101';
    await request(app).post('/students').send({ name: 'Test', roll }).expect(201);
    await request(app).post('/attendance').send({ roll, method: 'qr' }).expect(201);
    const res = await request(app).get('/attendance/' + roll).expect(200);
    expect(res.body.student.roll).toBe(roll);
    expect(Array.isArray(res.body.records)).toBe(true);
  });
});
