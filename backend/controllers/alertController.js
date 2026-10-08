const { alerts } = require("../utils/store");

const getAlerts = (req, res) => {
    res.json({
        count: alerts.length,
        alerts
    });
};


const getAlertById = (req, res) => {
    const alert = alerts.find(
        alert => alert.id === Number(req.params.id)
    );

    if (!alert) {
        return res.status(404).json({
            message: "Alert not found"
        });
    }

    res.json(alert);
};


const updateAlert = (req, res) => {
    const alert = alerts.find(
        alert => alert.id === Number(req.params.id)
    );

    if (!alert) {
        return res.status(404).json({
            message: "Alert not found"
        });
    }

    alert.status = req.body.status || alert.status;

    res.json({
        message: "Alert updated successfully",
        alert
    });
};


module.exports = {
    getAlerts,
    getAlertById,
    updateAlert
};