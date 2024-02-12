const conn = require("./database");

const fetchJeuxServices = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM produits WHERE Id_Categorie = 1`;
        let query = conn.query(sql, (err, result, field) => {
            if (err) {
                console.error("Error executing SQL:", err);
                return reject(err);
            }
            resolve(result);
        });
    });
};

module.exports = {
    fetchJeuxServices
};