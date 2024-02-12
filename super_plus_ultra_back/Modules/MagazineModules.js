const express = require("express");
const router = express.Router();
const MagazineServices = require("../Services/MagazineServices");

router.get("/Magazine", async (req, res) => {
    try {
        const Magazine = await MagazineServices.fetchMagazineServices();
        res.status(200).json(Magazine);
    } catch (err) {
        console.error("Oops...", err);
        res.status(500).json({ "message": "Error" + err.sqlMessage });
    }
});

module.exports = router;