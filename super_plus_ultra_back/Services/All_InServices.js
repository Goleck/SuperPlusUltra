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


module.exports = {
    fetchAll_InServices,
    fetchAll_In6Services
};