const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const courses = [
  {
    id: 1,
    courseName: "React Basics",
    startDate: "2024-08-01",
    lessonsCompleted: 4,
    duration: "6 weeks",
  },
  {
    id: 2,
    courseName: "Node.js Mastery",
    startDate: "2024-08-10",
    lessonsCompleted: 2,
    duration: "8 weeks",
  },
  {
    id: 3,
    courseName: "TypeScript Essentials",
    startDate: "2024-07-15",
    lessonsCompleted: 5,
    duration: "4 weeks",
  },
];

app.use(cors());

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.listen(PORT, () => {
  console.log(`CourseServer is running on http://localhost:${PORT}`);
});
