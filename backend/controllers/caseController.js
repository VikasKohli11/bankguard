const { cases, alerts } = require("../utils/store");


const createCase = (req, res) => {
    const {
        alertId,
        remarks
    } = req.body;

    const alert = alerts.find(
        alert => alert.id === Number(alertId)
    );

    if (!alert) {
        return res.status(404).json({
            message: "Alert not found"
        });
    }

    const newCase = {
        id: cases.length + 1,
        alertId: Number(alertId),
        assignedTo: req.user.id,
        remarks: remarks || "",
        status: "OPEN",
        createdAt: new Date(),
        updatedAt: new Date()
    };

    cases.push(newCase);

    alert.status = "UNDER_INVESTIGATION";

    res.status(201).json({
        message: "Investigation case created",
        case: newCase
    });
};


const getCases = (req, res) => {
    res.json({
        count: cases.length,
        cases
    });
};


const updateCase = (req, res) => {
    const investigationCase = cases.find(
        item => item.id === Number(req.params.id)
    );

    if (!investigationCase) {
        return res.status(404).json({
            message: "Case not found"
        });
    }

    if (req.body.status) {
        investigationCase.status = req.body.status;
    }

    if (req.body.remarks) {
        investigationCase.remarks = req.body.remarks;
    }

    investigationCase.updatedAt = new Date();

    res.json({
        message: "Case updated successfully",
        case: investigationCase
    });
};


module.exports = {
    createCase,
    getCases,
    updateCase
};