const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();


// ===============================
// Middleware
// ===============================

app.use(cors());
app.use(express.json());


// ===============================
// Routes
// ===============================

const authRoutes = require("./routes/authRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const alertRoutes = require("./routes/alertRoutes");
const ruleRoutes = require("./routes/ruleRoutes");
const caseRoutes = require("./routes/caseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/rules", ruleRoutes);
app.use("/api/cases", caseRoutes);


// ===============================
// Health Check
// ===============================

app.get("/api/health", (req, res) => {
    res.json({
        message: "BankGuard API is running"
    });
});


// ===============================
// Root Route
// ===============================

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to BankGuard API",
        version: "1.0.0",
        status: "Running"
    });
});


// ===============================
// Server
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `BankGuard server running on http://localhost:${PORT}`
    );
});