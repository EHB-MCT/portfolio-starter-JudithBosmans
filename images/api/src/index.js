const express = require("express");
const knex = require("knex");
const knexfile = require("./db/knexfile");
const routes = require("./routes");

function startServer(port, callback) {
  app.listen(port, callback);
}

const app = express();
const PORT = process.env.PORT || 3000;

const db = knex(knexfile.development);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the root route!");
});

app.use("/", routes(db));

startServer(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
