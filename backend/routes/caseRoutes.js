const express = require("express");

const {
    createCase,
    getCases,
    updateCase
} = require("../controllers/caseController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createCase);
router.get("/", protect, getCases);
router.put("/:id", protect, updateCase);

module.exports = router;