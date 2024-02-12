const express = require("express");
const router = express.Router();
const utilisateurServices = require("../Services/UtilisateurServices");

router.get("/utilisateur", async (req, res) => {
    try {
        const result = await utilisateurServices.ToutUtilisateurService();
        res.status(200).json(result);
    } catch (err) {
        console.error("Oops...", err);
        res.status(500).json({ "message": "Error" + err.sqlMessage });
    }
});

router.post("/Connection", async (req, res) => {
    try {
        const data = req.body;
        if (!data.Email || !data.Mdp) {
            res.status(400).json({ "message": "Pseudo et mot de passe requis" });
            return;
        }
        const result = await utilisateurServices.ConnectionService(data.Email, data.Mdp);
        if (result && result.length > 0) {
            res.status(200);
            res.json(result[0])
        } else {
            res.status(401).json({ "message": "Échec de la connexion" });
        }
    } catch (err) {
        console.error("Oops...", err);
        res.status(500).json({ "message": "Error " + err.sqlMessage });
    }
});

router.post("/inscription", async (req, res) => {
    try {
        const result = await utilisateurServices.AjouterUtilisateur(req.body);
        res.status(200).json(result);
    } catch (err) {
        console.error("Oops...", err);
        res.status(500).json({ "message": "Error" + err.sqlMessage });
    }
});

module.exports = router;