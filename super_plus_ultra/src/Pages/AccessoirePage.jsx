import ProduitComponent from '../Components/ProduitsAccessoireComponent';
import '../Styles/PageStyle.css';

const AccueilPage = () => {
    return (
        <div>
            <div className='Titre_Accueil'><h1>ACCESSOIRE</h1></div>
            <ProduitComponent />
        </div>
    );
};

export default AccueilPage;