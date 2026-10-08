const express = require("express");

const {
    getAlerts,
    getAlertById,
    updateAlert
} = require("../controllers/alertController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getAlerts);
router.get("/:id", protect, getAlertById);
router.put("/:id", protect, updateAlert);

module.exports = router;