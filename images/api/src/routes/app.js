const express = require("express");
const knex = require("knex");
const knexfile = require("../db/knexfile.js");
const routes = require("../routes.js");
const { checkMatchaRating } = require("../helpers/endPointHelpers.js");

const app = express();
const db = knex(knexfile.development);

app.use(express.json());

app.get("/getMatchaRating", (req, res) => {
  res.send("Jej u got artists");
});

app.post("/postMatchaRating", (req, res) => {
  if (checkMatchaRating(req.body.name)) {
    res.send("Congrats u posted a matcha rating");
  } else {
    res.status(400).send("Name doesn't meet requirements");
    return;
  }
});

app.use("/", routes(db));

module.exports = app;
