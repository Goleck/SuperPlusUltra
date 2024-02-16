import ProduitComponent from '../Components/ProduitsALLComponent';
import '../Styles/PageStyle.css';

const AccueilPage = () => {
    return (
        <div>
            <div className='Titre_Accueil'><h1>ALL-IN</h1></div>
            <ProduitComponent />
        </div>
    );
};

export default AccueilPage;