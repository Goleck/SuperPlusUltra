const express = require("express");
const router = express.Router();
const PanierServices = require("../Services/PanierServices");

router.post("/", async (req, res) => {
    try {
        const panier = req.body;
        console.log("console de panier",panier);
        const AddProduit = await PanierServices.AddProduitServices(panier);
        res.status(200).json(AddProduit);
    } catch (err) {
        console.error("Oops...", err);
        res.status(500).json({ "message": "Error" + err.sqlMessage });
    }
});

router.delete("/:Id_Produit", async (req, res) => {
    try {
        const result = await PanierServices.DeleteProduitsPanier(req.params.Id_Produit);
        console.log(req.params);
        res.status(200).json(result);
    } catch(err) {
        console.error("Oops...", err);
        res.status(500).json({ "message": "Error" + err.sqlMessage });
    };
});


router.get("/:id_Utilisateur", async (req, res) => {
    PanierServices.fetchDetailPanierById(req.params.id_Utilisateur).then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({ "message": "Error" + err.sqlMessage })
    });
});

module.exports = router;