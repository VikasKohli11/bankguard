const {
    transactions,
    alerts,
    cases
} = require("../utils/store");


const getDashboardStats = (req, res) => {

    const totalTransactions = transactions.length;

    const totalAlerts = alerts.length;

    const openAlerts = alerts.filter(
        alert => alert.status === "OPEN"
    ).length;

    const highRiskAlerts = alerts.filter(
        alert =>
            alert.severity === "HIGH" ||
            alert.severity === "CRITICAL"
    ).length;

    const openCases = cases.filter(
        item => item.status === "OPEN"
    ).length;

    const totalTransactionAmount = transactions.reduce(
        (total, transaction) => {
            return total + transaction.amount;
        },
        0
    );

    const riskDistribution = {
        LOW: transactions.filter(
            t => t.riskLevel === "LOW"
        ).length,

        MEDIUM: transactions.filter(
            t => t.riskLevel === "MEDIUM"
        ).length,

        HIGH: transactions.filter(
            t => t.riskLevel === "HIGH"
        ).length,

        CRITICAL: transactions.filter(
            t => t.riskLevel === "CRITICAL"
        ).length
    };


    res.json({
        summary: {
            totalTransactions,
            totalAlerts,
            openAlerts,
            highRiskAlerts,
            openCases,
            totalTransactionAmount
        },

        riskDistribution
    });
};


module.exports = {
    getDashboardStats
};