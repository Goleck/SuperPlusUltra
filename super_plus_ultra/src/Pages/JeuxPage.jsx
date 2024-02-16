import ProduitComponent from '../Components/ProduitsJeuxComponent';
import '../Styles/PageStyle.css';

const AccueilPage = () => {
    return (
        <div>
            <div className='Titre_Accueil'><h1>NOS JEUX</h1></div>
            <ProduitComponent />
        </div>
    );
};

export default AccueilPage;