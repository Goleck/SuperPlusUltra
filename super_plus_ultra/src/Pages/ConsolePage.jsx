import ProduitComponent from '../Components/ProduitsConsoleComponent';
import '../Styles/PageStyle.css';

const AccueilPage = () => {
    return (
        <div>
            <div className='Titre_Accueil'><h1>CONSOLE</h1></div>
            <ProduitComponent />
        </div>
    );
};

export default AccueilPage;