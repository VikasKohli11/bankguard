const { rules } = require("../utils/store");


const getRules = (req, res) => {
    res.json({
        count: rules.length,
        rules
    });
};


const createRule = (req, res) => {
    const {
        name,
        description,
        type,
        threshold,
        riskPoints
    } = req.body;

    if (!name || !type || threshold === undefined) {
        return res.status(400).json({
            message: "name, type and threshold are required"
        });
    }

    const rule = {
        id: rules.length + 1,
        name,
        description: description || "",
        type,
        threshold: Number(threshold),
        riskPoints: Number(riskPoints) || 10,
        isActive: true
    };

    rules.push(rule);

    res.status(201).json({
        message: "Fraud rule created successfully",
        rule
    });
};


const updateRule = (req, res) => {
    const rule = rules.find(
        rule => rule.id === Number(req.params.id)
    );

    if (!rule) {
        return res.status(404).json({
            message: "Rule not found"
        });
    }

    Object.assign(rule, req.body);

    res.json({
        message: "Rule updated successfully",
        rule
    });
};


module.exports = {
    getRules,
    createRule,
    updateRule
};