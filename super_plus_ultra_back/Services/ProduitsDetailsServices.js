const conn = require("./database");

const fetchProduitsById = (Id_Produits) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM produits WHERE Id_Produits = ${Id_Produits};`;
        let query = conn.query(sql, (err, result, field) => {
            if (err) {
                console.error("Error executing SQL:", err);
                return reject(err);
            }
            resolve(result);
        });
    });
};


const AdminModificationByID = (produits) => {
  return new Promise((resolve, reject) => {
      console.log(produits);

      const Id_Produits = produits.Id_Produits;
      console.log(Id_Produits);

      if (Id_Produits === undefined) {
          return reject("L'ID du produit n'est pas défini.");
      }

      let sql = `UPDATE produits SET 
          Titre=?,
          Editeur=?,
          Genre=?,
          Sortie=?,
          Image=?,
          Etat=?,
          Descriptions=?,
          Prix=?
          WHERE Id_Produits = ?`;

      const values = [
          produits.Titre,
          produits.Editeur,
          produits.Genre,
          produits.Sortie,
          produits.Image,
          produits.Etat,
          produits.Descriptions,
          produits.Prix,
          Id_Produits
      ];

      conn.query(sql, values, (err, result) => {
          if (err) return reject(err);
          resolve(result);
          console.log(sql);
      });
  });
};

module.exports = {
    fetchProduitsById,
    AdminModificationByID
};