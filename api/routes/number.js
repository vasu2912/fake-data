const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling GET requests to number",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "handling POST requests to number",
  });
});

module.exports = router;
