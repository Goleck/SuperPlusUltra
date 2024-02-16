import { Link } from 'react-router-dom';
import logo from '../Images/Logo-Super-Plusv3-.png';
import Media1 from '../Images/Media2-.png';
import Media2 from '../Images/Media3.png';
import Media3 from '../Images/Media4.png';
// Style
import '../Styles/FooterStyle.css';

const Footer = () => {
 
  return (
  <div className="Contenant_Total_Footer">
    <div className="Contenant_Footer"> 
        <div>
            <li><a href="/Elements/ML_SPU.pdf" target="_blank">CGV</a></li>
            <li><a href="/Elements/ML_SPU.pdf" target="_blank">MENTIONS LEGALES</a></li>
            <li><Link to="/Contact" className='link_Footer'>CONTACT</Link></li>
            <li><Link to="/Accueil" className='link_Footer'>© SUPER PLUS ULTRA. Tous droits réservés</Link></li>
        </div>
        <div className="Footer">
            <div className="Media">
            <a href="https://www.instagram.com" target="_blank"><img className="logo_Media" src={Media1} alt="Logo_instagram" /></a>
            <a href="https://twitter.com/" target="_blank"><img className="logo_Media" src={Media2} alt="Logo_twitter" /></a>
            <a href="https://www.facebook.com/" target="_blank"><img className="logo_Media" src={Media3} alt="Logo_facebook" /></a>
            </div>
            <Link to="/accueil"><img className="logo_Footer" src={logo} alt="Logo" /></Link>
        </div>
    </div>
  </div>
  );
}

export default Footer;