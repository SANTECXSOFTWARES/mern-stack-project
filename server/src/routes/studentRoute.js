const express = require("express");
const router = express.Router();
const { Students } = require("../models");

router.get("/list-students", async (req, res) => {
  const listOfStudents = await Students.findAll();
  res.json(listOfStudents);
});

router.post("/add-student", async (req, res) => {
  const addStudent = req.body;
  await Students.create(addStudent);
  res.json(addStudent);
});

module.exports = router;
