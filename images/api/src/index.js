const express = require("express");
const knex = require("knex");
const knexfile = require("./db/knexfile");
const routes = require("./routes");

const { checkArtistName } = require("./helpers/endPointHelpers.js");

function startServer(port, callback) {
  app.listen(port, callback);
}

const app = express();
const PORT = process.env.PORT || 3000;

const db = knex(knexfile.development);

app.use(express.json());

app.get("/getArtist", (req, res) => {
  res.send("Jej u got artists");
});

app.post("/postArtist", (req, res) => {
  if (checkArtistName(artist.name)) {
    res.send("Congrats u posted an artist");
  }
  res.send("Name doesn't meet requirements");
});

app.use("/", routes(db));

startServer(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
