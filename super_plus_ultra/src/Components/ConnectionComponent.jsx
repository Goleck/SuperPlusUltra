import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../Context/GlobalContext';
// Service
import ConnectionService from '../Services/ConnectionService';
// Style
import '../Styles/ConnectionStyle.css';

const ConnectionComponent = () => {
  const [Email, setEmail] = useState('');
  const [Mdp, setMdp] = useState('');
  const { setUtilisateur, setIsAuthenticated } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMdpChange = (e) => {
    setMdp(e.target.value);
  };

  const handleConnection = async (e) => {
    e.preventDefault();
    try {
      const response = await ConnectionService.Connection({ Mdp: Mdp, Email: Email });
      if (response.status === 200) {
        setIsAuthenticated(true);
        setUtilisateur(response.data);
        navigate(`/accueil`);
      }
    } catch (error) {
      console.error('Échec de la connexion', error);
    }
  };

  return (
    <div className='Formulaire_Total'>
      <form onSubmit={handleConnection}>
          <input type="email" value={Email} onChange={handleEmailChange} required placeholder="Adresse-Mail"/>
        <br />
          <input type="password" value={Mdp} onChange={handleMdpChange} required placeholder="Mot de Passe" />
        <br />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default ConnectionComponent;
