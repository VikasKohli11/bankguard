const {
    transactions,
    alerts
} = require("../utils/store");

const {
    calculateRisk
} = require("../services/fraudDetectionService");


const createTransaction = (req, res) => {
    try {
        const {
            accountNumber,
            amount,
            transactionType,
            location,
            channel,
            isUnusualLocation
        } = req.body;

        if (
            !accountNumber ||
            amount === undefined ||
            !transactionType
        ) {
            return res.status(400).json({
                message:
                    "accountNumber, amount and transactionType are required"
            });
        }

        const transaction = {
            id: transactions.length + 1,
            transactionId: `TXN${Date.now()}`,
            accountNumber,
            amount: Number(amount),
            transactionType,
            location: location || "Unknown",
            channel: channel || "ONLINE",
            isUnusualLocation: isUnusualLocation || false,
            timestamp: new Date(),
            status: "COMPLETED"
        };

        const risk = calculateRisk(transaction);

        transaction.riskScore = risk.riskScore;
        transaction.riskLevel = risk.riskLevel;

        transactions.push(transaction);

        // Create alert for medium or higher risk
        if (risk.riskScore >= 30) {
            const alert = {
                id: alerts.length + 1,
                transactionId: transaction.transactionId,
                riskScore: risk.riskScore,
                severity: risk.riskLevel,
                triggeredRules: risk.triggeredRules,
                status: "OPEN",
                createdAt: new Date()
            };

            alerts.push(alert);
        }

        res.status(201).json({
            message: "Transaction processed successfully",
            transaction,
            fraudAnalysis: risk
        });

    } catch (error) {
        res.status(500).json({
            message: "Transaction processing failed",
            error: error.message
        });
    }
};


const getTransactions = (req, res) => {
    res.json({
        count: transactions.length,
        transactions
    });
};


const getTransactionById = (req, res) => {
    const transaction = transactions.find(
        t => t.transactionId === req.params.id
    );

    if (!transaction) {
        return res.status(404).json({
            message: "Transaction not found"
        });
    }

    res.json(transaction);
};


module.exports = {
    createTransaction,
    getTransactions,
    getTransactionById
};