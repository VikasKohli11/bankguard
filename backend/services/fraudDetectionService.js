const { transactions, rules } = require("../utils/store");

function calculateRisk(transaction) {
    let riskScore = 0;
    const triggeredRules = [];

    // Rule 1: High amount
    const highAmountRule = rules.find(
        rule => rule.type === "HIGH_AMOUNT" && rule.isActive
    );

    if (
        highAmountRule &&
        transaction.amount > highAmountRule.threshold
    ) {
        riskScore += highAmountRule.riskPoints;

        triggeredRules.push({
            rule: highAmountRule.name,
            points: highAmountRule.riskPoints
        });
    }

    // Rule 2: Rapid transactions
    const rapidRule = rules.find(
        rule => rule.type === "RAPID_TRANSACTIONS" && rule.isActive
    );

    if (rapidRule) {
        const fiveMinutesAgo = new Date(
            Date.now() - 5 * 60 * 1000
        );

        const recentTransactions = transactions.filter(t => {
            return (
                t.accountNumber === transaction.accountNumber &&
                new Date(t.timestamp) >= fiveMinutesAgo
            );
        });

        if (recentTransactions.length >= rapidRule.threshold) {
            riskScore += rapidRule.riskPoints;

            triggeredRules.push({
                rule: rapidRule.name,
                points: rapidRule.riskPoints
            });
        }
    }

    // Rule 3: Unusual location
    const locationRule = rules.find(
        rule => rule.type === "UNUSUAL_LOCATION" && rule.isActive
    );

    if (
        locationRule &&
        transaction.isUnusualLocation === true
    ) {
        riskScore += locationRule.riskPoints;

        triggeredRules.push({
            rule: locationRule.name,
            points: locationRule.riskPoints
        });
    }

    // Risk level
    let riskLevel = "LOW";

    if (riskScore >= 70) {
        riskLevel = "CRITICAL";
    } else if (riskScore >= 50) {
        riskLevel = "HIGH";
    } else if (riskScore >= 30) {
        riskLevel = "MEDIUM";
    }

    return {
        riskScore,
        riskLevel,
        triggeredRules
    };
}

module.exports = {
    calculateRisk
};