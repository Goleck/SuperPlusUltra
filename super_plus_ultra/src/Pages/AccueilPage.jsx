import ProduitComponent from '../Components/ProduitsALL6Component';
import Carousel from '../Components/CarouselComponent';
import '../Styles/PageStyle.css';

const AccueilPage = () => {
    return (
        <div>
            <Carousel />
            <div className='Titre_Accueil'><h1>PRODUITS TENDANCES</h1></div>
            <ProduitComponent />
        </div>
    );
};

export default AccueilPage;
