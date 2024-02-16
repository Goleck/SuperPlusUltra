const conn = require("./database");

const ToutUtilisateurService = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM utilisateur;`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const ConnectionService = (Email, Mdp) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM utilisateur WHERE email = '${Email}' AND mdp = '${Mdp}';`;
        let query = conn.query(sql, (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

const AjouterUtilisateur = (utilisateur) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO utilisateur (Nom, Prenom, Email, Adresse, Mdp) VALUES (?, ?, ?, ?, ?)`;
    
        const values = [
            utilisateur.Nom,
            utilisateur.Prenom,
            utilisateur.Email,
            utilisateur.Adresse,
            utilisateur.Mdp
        ];

        conn.query(sql, values, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const ProfilModificationService = (utilisateur) => {
    return new Promise((resolve, reject) => {
        console.log(utilisateur);

        if (utilisateur === undefined || utilisateur.id_Utilisateur === undefined) {
            return reject("L'ID de l'utilisateur n'est pas défini.");
        }

        let sql = `UPDATE utilisateur SET 
            Nom=?,
            Prenom=?,
            Email=?,
            Adresse=?
            WHERE id_Utilisateur = ?`;

        const values = [
            utilisateur.Nom,
            utilisateur.Prenom,
            utilisateur.Email,
            utilisateur.Adresse,
            utilisateur.id_Utilisateur 
        ];

        conn.query(sql, values, (err, result) => {
            if (err) return reject(err);
            resolve(result);
            console.log(sql);
        });
    });
};


module.exports = {
    ToutUtilisateurService,
    ConnectionService,
    AjouterUtilisateur,
    ProfilModificationService
}