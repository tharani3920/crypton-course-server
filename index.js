const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const courses = [
  {
    id: 1,
    courseName: "React Basics",
    courseLesson: "10 Lessons",
    startDate: "2024-08-01",
    lessonsCompleted: "5/10 (50%)",
    duration: "6h 32m 26s",
    icon: "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
  },
  {
    id: 2,
    courseName: "Node.js Mastery",
    courseLesson: "20 Lessons",
    startDate: "2024-08-10",
    lessonsCompleted: "15/20 (75%)",
    duration: "8h 47m 56s",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2Ft7qEVQjmr6ac6q50OZJ61N3n1eG8SeN_g2RfjmbdDHAeQ4XuhcHh5_hiyksoS7d5w&usqp=CAU",
  },
  {
    id: 3,
    courseName: "TypeScript Essentials",
    courseLesson: "15 Lessons",
    startDate: "2024-07-15",
    lessonsCompleted: "2/15 (13.3%)",
    duration: "9h 14m 19s",
    icon: "https://blog.teamtreehouse.com/wp-content/uploads/2015/05/87a5a0fdc86455c3f94b0b0eebfdb1b9_400x400.png",
  },
  {
    id: 4,
    courseName: "Web Development",
    courseLesson: "40 Lessons",
    startDate: "2024-07-15",
    lessonsCompleted: "5/40 (12.5%)",
    duration: "12h 15m 46s",
    icon: "https://cdn-icons-png.freepik.com/256/8422/8422288.png?semt=ais_hybrid",
  },
  {
    id: 5,
    courseName: "Project Development",
    courseLesson: "65 Lessons",
    startDate: "2024-07-15",
    lessonsCompleted: "5/65 (7.6%)",
    duration: "19h 18m 37s",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjOkUjOYUnyETYyEvLQ9TLdmjxd_BR6_dU867jr3AqPQ9vhwtUfCVJ2vTymbUetnupiQ&usqp=CAU",
  },
];

app.use(cors());

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.listen(PORT, () => {
  console.log(`CourseServer is running on http://localhost:${PORT}`);
});
