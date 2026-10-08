const express = require("express");

const {
    getRules,
    createRule,
    updateRule
} = require("../controllers/ruleController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getRules);
router.post("/", protect, createRule);
router.put("/:id", protect, updateRule);

module.exports = router;