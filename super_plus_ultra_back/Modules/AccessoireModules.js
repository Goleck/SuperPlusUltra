const express = require("express");
const router = express.Router();
const AccessoireServices = require("../Services/AccessoireServices");

router.get("/Accessoire", async (req, res) => {
    try {
        const Accessoire = await AccessoireServices.fetchAccessoireServices();
        res.status(200).json(Accessoire);
    } catch (err) {
        console.error("Oops...", err);
        res.status(500).json({ "message": "Error" + err.sqlMessage });
    }
});

module.exports = router;