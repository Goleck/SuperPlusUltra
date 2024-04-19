import { Link, useNavigate } from 'react-router-dom';
import logo from '../Images/Logo-Super-Plusv3-.webp';
import icone_Panier from '../Images/Logo_Panier-.png';
import icone_Profil from '../Images/Logo_Profil-.png';
import { useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';
// Style
import '../Styles/HeaderStyle.css';


const Header = () => {
  const { utilisateur, setUtilisateur, isAuthenticated, setIsAuthenticated } = useContext(GlobalContext);
  const navigate = useNavigate();
 
  const handleDeconnection = () => {
    setUtilisateur(null);
    setIsAuthenticated(false);
    navigate("/accueil");
  };

  return (
    <div className="Contenant_Total_navbar">
      <div className="Contenant_navbar"> 
        <Link to="/accueil"><img className="logo_nav" src={logo} alt="Logo" /></Link>
        <div className="Navbar">
        {utilisateur && isAuthenticated && (
        <li><Link to={`/Profil/${utilisateur.id_Utilisateur}`} className='link_nav'>
              <img className='link_Panier' src={icone_Profil} alt="Logo_Profil" />
            </Link></li>
            )}
          <li><Link to='/inscription' className='link_nav'>INSCRIPTION</Link></li>
          {isAuthenticated ? (
            <li onClick={handleDeconnection} className='link_nav'>DECONNEXION</li>
          ) : (
            <li><Link to="/connection" className='link_nav'>CONNEXION</Link></li>
          )}
          {utilisateur && isAuthenticated && (
            <li><Link to={`/Panier/${utilisateur.id_Utilisateur}`} className='link_nav'>
              <img className='link_Panier' src={icone_Panier} alt="Logo_Panier" />
            </Link></li>
          )}
        </div>
      </div>
      <div className="Contenant_sous_navbar">
        <div className="Sous_navbar">
          <li><Link to='/Console' className='link_sous_nav'>CONSOLES</Link></li>
          <li><Link to="/jeux" className='link_sous_nav'>JEUX</Link></li>
          <li><Link to="/All_In" className='link_sous_nav'>ALL-IN</Link></li>
          <li><Link to="/Accessoire" className='link_sous_nav'>ACCESSOIRES</Link></li>
          <li><Link to="/Magazine" className='link_sous_nav'>MAGAZINES</Link></li>
        </div>
      </div>
    </div>
  );
}

export default Header;
