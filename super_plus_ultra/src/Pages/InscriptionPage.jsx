import InscriptionComponent from '../Components/InscriptionComponent';
// Style
import '../Styles/PageStyle.css';

const InscriptionPage = () => {
    return (
        <div>
            <div className='Titre_Accueil'><h1>INSCRIPTION</h1></div>
            <InscriptionComponent />
        </div>
    );
};

export default InscriptionPage;