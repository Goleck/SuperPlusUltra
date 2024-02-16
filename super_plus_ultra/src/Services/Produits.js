import axios from 'axios';

function GetAll_In() {
    return axios.get("http://127.0.0.1:3000/All_In")
}
function GetAll_In6() {
    return axios.get("http://127.0.0.1:3000/All_In6")
}
function GetConsole() {
    return axios.get("http://127.0.0.1:3000/Console")
}
function GetJeux() {
    return axios.get("http://127.0.0.1:3000/jeux")
}
function GetAccessoire() {
    return axios.get("http://127.0.0.1:3000/Accessoire")
}
function GetMagazine() {
    return axios.get("http://127.0.0.1:3000/Magazine")
}
function GetDetailsById(Id_Produits) {
    return axios.get("http://127.0.0.1:3000/Details/" + Id_Produits)
}

function AjouterProduit(nouveauProduit) {
    return axios.post("http://127.0.0.1:3000/All_In", nouveauProduit);
}

function AdminModificationService(modificationProduit) {
    const response = axios.put(`http://127.0.0.1:3000/Details`, modificationProduit);
    return response.data;
}


export default {
    GetAll_In,
    GetAll_In6,
    GetConsole,
    GetJeux,
    GetMagazine,
    GetAccessoire,
    GetDetailsById,
    AjouterProduit,
    AdminModificationService
}