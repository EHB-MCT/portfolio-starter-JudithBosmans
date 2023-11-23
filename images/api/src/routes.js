const express = require("express");

module.exports = (db) => {
  const router = express.Router();

  // Test GET endpoint
  router.get('/test', (req, res) => {
    res.send('Test endpoint reached successfully!');
  });

  return router;
};
