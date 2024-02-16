import React, { useEffect, useState, useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';
// Service
import ProfilModif from '../Services/ConnectionService';
// Style
import '../Styles/ProduitsDetailsStyle.css';
import '../Styles/AdminStyle.css';

const ProfilComponent = ({ id }) => {
    const { utilisateur } = useContext(GlobalContext);
    const [profil, setProfil] = useState(id);

    const handleModifprofil = (e) => {
        const { name, value } = e.currentTarget;
        setProfil({ ...profil, [name]: value });
    };

    const ModifProfil = async (e) => {
        e.preventDefault();
        try {
            console.log("Modification du profil :", profil); 
            const response = await ProfilModif.ModifProfilUtilisateur(profil);
            console.log("Réponse de la modification :", response); 
        } catch (error) {
            console.log("Erreur lors de la modification :", error); 
        }
    };

    useEffect(() => {
        setProfil(utilisateur); 
    }, [utilisateur]);

    return (
        <div className='Admin_Formulaire_Total'>
            <form onSubmit={ModifProfil} method='post'>
                <div className='LForm'>
                    <label>Votre Nom :<input type="text" name='Nom' value={profil?.Nom} onChange={handleModifprofil} placeholder="NOM" /></label>
                    <br />
                    <label>Votre Prénom : <input type="text" name='Prenom' value={profil?.Prenom} onChange={handleModifprofil} placeholder="PRENOM" /></label>
                    <br />
                    <label>Votre Adresse-Mail : <input type="text" name='Email' value={profil?.Email} onChange={handleModifprofil} placeholder="E-MAIL" /></label>
                    <br />
                    <label>Votre Adresse de livraison : <input type="text" name='Adresse' value={profil?.Adresse} onChange={handleModifprofil} placeholder="ADRESSE" /></label>
                </div>
                <div className='Button_modif'>
                    <button type="submit">MODIFIER MON PROFIL</button>
                </div>
            </form>
        </div>
    );
};

export default ProfilComponent;
