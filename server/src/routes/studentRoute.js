const express = require("express");
const router = express.Router();
const { Students } = require("../models");

router.get("/list-students", async (req, res) => {
  const listOfStudents = await Students.findAll();
  res.json(listOfStudents);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const listOfStudents = await Students.findByPk(id);
  res.json(listOfStudents);
});

router.post("/add-student", async (req, res) => {
  const addStudent = req.body;
  await Students.create(addStudent);
  res.json(addStudent);
});

router.delete("/delete/:id", async (req, res) => {
  console.log("req ::", req)
  const id = req.params.id;
  await Students.destroy({
    where: {
      id: id,
    },
  });
  res.json("DELETED SUCCESSFULLY");
});

module.exports = router;
