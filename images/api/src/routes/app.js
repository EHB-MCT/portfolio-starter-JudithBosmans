const express = require("express");
const knex = require("knex");
const knexfile = require("../db/knexfile.js");
const routes = require("../routes.js");
const { checkMatchaRating } = require("../helpers/endPointHelpers.js");
const cors = require("cors");

const app = express();
app.use(cors());
const db = knex(knexfile.development);

app.use(express.json());

app.get("/getMatchaRating", async (req, res) => {
  try {
    const reviews = await db.select("*").from("matcha_reviews");
    res.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).send("Error fetching reviews");
  }
});

app.post("/postMatchaRating", async (req, res) => {
  const { name } = req.body;

  if (!checkMatchaRating(name)) {
    return res.status(400).send("Review doesn't meet requirements");
  }

  try {
    await db("matcha_reviews").insert({ name });
    res.send("Congrats, you posted a matcha rating");
  } catch (error) {
    console.error("Error posting review:", error);
    res.status(500).send("Error posting review");
  }
});

app.use("/", routes(db));

module.exports = app;
