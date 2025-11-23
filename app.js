const express = require('express');
const bodyParser = require('body-parser');
const studentsRouter = require('./routes/students');
const attendanceRouter = require('./routes/attendance');
const webhookHandler = require('./webhook-handler');

const app = express();
app.use(bodyParser.json());

app.use('/students', studentsRouter);
app.use('/attendance', attendanceRouter);
app.post('/webhook', webhookHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Smart Attendance app listening on port ${PORT}`);
});
