const users = [];
const transactions = [];
const alerts = [];
const rules = [
    {
        id: 1,
        name: "High Amount Transaction",
        description: "Transaction amount is unusually high",
        type: "HIGH_AMOUNT",
        threshold: 200000,
        riskPoints: 30,
        isActive: true
    },
    {
        id: 2,
        name: "Rapid Transactions",
        description: "Multiple transactions in a short period",
        type: "RAPID_TRANSACTIONS",
        threshold: 5,
        riskPoints: 25,
        isActive: true
    },
    {
        id: 3,
        name: "Unusual Location",
        description: "Transaction from an unusual location",
        type: "UNUSUAL_LOCATION",
        threshold: 1,
        riskPoints: 20,
        isActive: true
    }
];

const cases = [];

module.exports = {
    users,
    transactions,
    alerts,
    rules,
    cases
};