import ProduitComponent from '../Components/ProduitsMagazineComponent';
import '../Styles/PageStyle.css';

const AccueilPage = () => {
    return (
        <div>
            <div className='Titre_Accueil'><h1>MAGAZINE</h1></div>
            <ProduitComponent />
        </div>
    );
};

export default AccueilPage;