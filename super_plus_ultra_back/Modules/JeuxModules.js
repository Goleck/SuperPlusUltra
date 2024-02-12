const express = require("express");
const router = express.Router();
const JeuxServices = require("../Services/JeuxServices");

router.get("/jeux", async (req, res) => {
    try {
        const jeux = await JeuxServices.fetchJeuxServices();
        res.status(200).json(jeux);
    } catch (err) {
        console.error("Oops...", err);
        res.status(500).json({ "message": "Error" + err.sqlMessage });
    }
});

module.exports = router;