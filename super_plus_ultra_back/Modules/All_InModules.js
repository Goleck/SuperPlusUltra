const express = require("express");
const router = express.Router();
const All_InServices = require("../Services/All_InServices");

router.get("/All_In", async (req, res) => {
    try {
        const All_In = await All_InServices.fetchAll_InServices();
        res.status(200).json(All_In);
    } catch (err) {
        console.error("Oops...", err);
        res.status(500).json({ "message": "Error" + err.sqlMessage });
    }
});

module.exports = router;