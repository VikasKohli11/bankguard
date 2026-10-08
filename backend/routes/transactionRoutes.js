const express = require("express");

const {
    createTransaction,
    getTransactions,
    getTransactionById
} = require("../controllers/transactionController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createTransaction);
router.get("/", protect, getTransactions);
router.get("/:id", protect, getTransactionById);

module.exports = router;