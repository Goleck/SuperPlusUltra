import axios from 'axios';

function AjouterProduitPanier(produit) {
    return axios.post('http://127.0.0.1:3000/panier/', produit);
}
function GetPanier(id_utilisateur) {
    return axios.get(`http://127.0.0.1:3000/panier/` + id_utilisateur);
}
function SupprimerProduitPanier(Id_Produits) {
    return axios.delete(`http://127.0.0.1:3000/panier/` + Id_Produits);
}


export default {
    AjouterProduitPanier,
    SupprimerProduitPanier,
    GetPanier,
}