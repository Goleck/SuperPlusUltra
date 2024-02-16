const conn = require("./database");

const fetchAll_InServices = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM produits`;
        let query = conn.query(sql, (err, result, field) => {
            if (err) {
                console.error("Error executing SQL:", err);
                return reject(err);
            }
            resolve(result);
        });
    });
};

const fetchAll_In6Services = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM produits ORDER BY Prix DESC LIMIT 6;`;
        let query = conn.query(sql, (err, result, field) => {
            if (err) {
                console.error("Error executing SQL:", err);
                return reject(err);
            }
            resolve(result);
        });
    });
};

const AjouterProduit = (nouveauProduit) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO produits (Titre, Editeur, Genre, Sortie, Image, Etat, Descriptions, Quantite, Prix, Id_Categorie )
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
        const values = [
            nouveauProduit.Titre,
            nouveauProduit.Editeur,
            nouveauProduit.Genre,
            nouveauProduit.Sortie,
            nouveauProduit.Image,
            nouveauProduit.Etat,
            nouveauProduit.Descriptions,
            nouveauProduit.Quantite,
            nouveauProduit.Prix,
            nouveauProduit.Id_Categorie
        ];

        conn.query(sql, values, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}


module.exports = {
    fetchAll_InServices,
    fetchAll_In6Services,
    AjouterProduit
};