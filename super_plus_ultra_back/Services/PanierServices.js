const conn = require("./database");


const AddProduitServices = (panier) => {
    console.log(panier);
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO panier (id_Utilisateur, Id_Produits, Date_Panier, Montant)
         VALUES (?,?,NOW(),?)`;
        console.log(panier);
        let query = conn.query(sql, [panier.id_Utilisateur, panier.Id_Produits, panier.Prix], (err, result, field) => {
            if (err) {
                console.error("Error executing SQL:", err);
                return reject(err);
            }
            resolve(result);
        });
    });
    
};


const fetchDetailPanierById = (id_Utilisateur) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM produits INNER JOIN panier
        ON produits.Id_Produits = panier.Id_Produits WHERE Panier.id_Utilisateur = ${id_Utilisateur}`;
        let query = conn.query(sql, (err, result, field) => {
            if (err) {
                console.error("Error executing SQL:", err);
                return reject(err);
            }
            resolve(result);
        });
    });
};

const DeleteProduitsPanier = (produit) => {
    return new Promise((resolve, reject) => {
      let sql = `DELETE FROM panier WHERE Id_Produits = ?`;
      let query = conn.query(sql,[produit] ,(err, result, field) => {
        if (err) {
          console.error("Error executing SQL:", err);
          return reject(err);
        }
        resolve(result);
      });
    });
  };

module.exports = {
    AddProduitServices,
    DeleteProduitsPanier,
    fetchDetailPanierById
};