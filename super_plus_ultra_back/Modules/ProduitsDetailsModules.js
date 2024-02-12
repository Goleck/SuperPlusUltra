const express = require("express");
const router = express.Router();
const ProduitsDetailsServices = require("../Services/ProduitsDetailsServices");

router.get("/:Id_Produits", async (req, res) => {
    ProduitsDetailsServices.fetchProduitsById(req.params.Id_Produits).then(result => {
        res.status(200)
        res.json(result[0]);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

router.put("/", async (req, res) => {
    try {
        const data= req.body;
        console.log(data);
        const result = await ProduitsDetailsServices.AdminModificationByID(data);
        res.status(200).json(result);
    } catch (err) {
        console.error("Oops...", err);
        res.status(500).json({ message: "Erreur" + err.sqlMessage });
    }
});


module.exports = router;