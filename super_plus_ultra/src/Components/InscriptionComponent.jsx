import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Service
import ConnectionServices from '../Services/ConnectionService';
// Style
import '../Styles/InscriptionStyle.css';

const InscriptionComponent = () => {
  const [Email, setEmail] = useState('');
  const [Mdp, setMdp] = useState('');
  const [Nom, setNom] = useState('');
  const [Prenom, setPrenom] = useState('');
  const [Adresse, setAdresse] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMdpChange = (e) => {
    setMdp(e.target.value);
  };
  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handlePrenomChange = (e) => {
    setPrenom(e.target.value);
  };
  const handleAdresseChange = (e) => {
    setAdresse(e.target.value);
  };

  const Inscription = async (e) => {
    e.preventDefault()
    try {
      const response = await ConnectionServices.AjouterUtilisateur({"Mdp": Mdp, "Email" : Email, "Nom": Nom, "Prenom": Prenom, "Adresse": Adresse});
      console.log(response);
      if (response.status === 200) {
        navigate(`/connection`);
      }
    } catch (error) {
      console.error('Échec de la connexion', error);
    }
  };

  return (
    <div className='Formulaire_Inscription_Total'>
      <form onSubmit={Inscription}>
        <div className='Form'>
          <input type="text" value={Nom} onChange={handleNomChange} required placeholder="NOM"/>
        <br />
          <input type="text" value={Prenom} onChange={handlePrenomChange} required placeholder="PRENOM" />
        <br />
        <input type="text" className='Input_Adresse' value={Adresse} onChange={handleAdresseChange} required placeholder="ADRESSE" />
        <br />
        <input type="password" value={Mdp} onChange={handleMdpChange} required pattern="(?=.*\d).{8,}" title="Le mot de passe doit contenir au moins 8 caractères dont au moins un chiffre" placeholder="MOT DE PASSE" />
        <br />
          <input type="mail" value={Email} onChange={handleEmailChange} required placeholder="ADRESSE-MAIL"/>
          <br/>
        <button type="submit">S'INSCRIRE</button>
        </div>
      </form>
    </div>
  );
};

export default InscriptionComponent;
