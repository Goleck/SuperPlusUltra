import PanierComponent from '../Components/PanierComponent';
import { useParams, } from 'react-router-dom';
import { useContext } from 'react';
import '../Styles/PageStyle.css';
import GlobalContext from '../Context/GlobalContext';


const PanierPage = () => {
    const {id_utilisateur} = useParams();
    const {isAuthenticated} = useContext(GlobalContext);

    return (
        <div>
            <div className='Titre_Accueil'><h1>PANIER</h1></div>
            {isAuthenticated ? (
                <PanierComponent id_utilisateur={id_utilisateur}/>
            ) : (
                <h1>Veuillez vous connectez</h1>
            )
            }
           
        </div>
    );
};

export default PanierPage;