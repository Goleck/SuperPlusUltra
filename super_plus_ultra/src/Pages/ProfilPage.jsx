import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import GlobalContext from '../Context/GlobalContext';
// Component
import ProfilComponent from '../Components/ProfilComponent';
import AdminAjoutComponent from '../Components/AdminAjoutComponent';
// Stylee
import '../Styles/PageStyle.css';


const ProfilPage = () => {
    const { id } = useParams();
    const { utilisateur } = useContext(GlobalContext);


    return (
        <div>
            <div className='Titre_Accueil'><h1>PROFIL</h1></div>
            <ProfilComponent id={id}/>
            
            {utilisateur && utilisateur.is_Admin ? (
                <div>
                    <div className='Titre_Accueil'><h1>AJOUTER UN PRODUIT</h1></div>
                    <AdminAjoutComponent />
                </div>
            ) : (
                null
            )}
        </div>
    );
            }

export default ProfilPage;
