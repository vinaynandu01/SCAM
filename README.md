# Smart Campus Attendance Management (Sample)

Simple Node.js + Express demo repository for the Smart Campus Attendance Management System.
Provides endpoints to register students, mark attendance and view attendance records.

## Quick start (local)
1. Install Node 18+ and npm.
2. Install deps:
   ```bash
   npm install
   ```
3. Start the app:
   ```bash
   npm start
   ```
4. API:
   - `POST /students` register student: `{ "name": "Alice", "roll": "CSE101" }`
   - `POST /attendance` mark attendance: `{ "roll": "CSE101", "method": "qr" }`
   - `GET /attendance/:roll` get attendance for roll

## Docker
Build and run:
```bash
docker build -t smart-attendance .
docker run -p 3000:3000 smart-attendance
```

## Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Smart Attendance sample"
git branch -M main
git remote add origin https://github.com/<your-username>/smart-attendance.git
git push -u origin main
```

## Jenkins
A sample `Jenkinsfile` is included to show basic stages: build, test, deploy (demo).

