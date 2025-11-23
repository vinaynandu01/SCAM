const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

let dbPromise = open({
  filename: path.join(__dirname, '..', 'data', 'attendance.db'),
  driver: sqlite3.Database
});

async function init() {
  const db = await dbPromise;
  await db.exec(`CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    roll TEXT UNIQUE
  );`);
  await db.exec(`CREATE TABLE IF NOT EXISTS attendance (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER,
    method TEXT,
    timestamp TEXT,
    FOREIGN KEY(student_id) REFERENCES students(id)
  );`);
  return db;
}

init();

module.exports = {
  run: async (sql, params=[]) => {
    const db = await dbPromise;
    return db.run(sql, params);
  },
  get: async (sql, params=[]) => {
    const db = await dbPromise;
    return db.get(sql, params);
  },
  all: async (sql, params=[]) => {
    const db = await dbPromise;
    return db.all(sql, params);
  }
};
