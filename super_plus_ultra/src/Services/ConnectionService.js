import axios from 'axios';

function Connection(user) {
    return axios.post("http://127.0.0.1:3000/Connection",user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function AjouterUtilisateur(user) {
    return axios.post("http://127.0.0.1:3000/inscription", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  function ModifProfilUtilisateur(profil) {
    return axios.put("http://127.0.0.1:3000/profil", profil, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  export default {
    Connection,
    AjouterUtilisateur,
    ModifProfilUtilisateur
  };