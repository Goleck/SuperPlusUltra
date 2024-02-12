const express = require("express");
const router = express.Router();
const ConsoleServices = require("../Services/ConsoleServices");

router.get("/Console", async (req, res) => {
    try {
        const Console = await ConsoleServices.fetchConsoleServices();
        res.status(200).json(Console);
    } catch (err) {
        console.error("Oops...", err);
        res.status(500).json({ "message": "Error" + err.sqlMessage });
    }
});

module.exports = router;