import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../Context/GlobalContext';
// Service
import PanierService from '../Services/PanierService';
// Style
import '../Styles/ProduitsDetailsStyle.css';

const ProduitDetailsComponent = ({ produit }) => {
    const { utilisateur } = useContext(GlobalContext);

    const AjouterAuPanier = async () => {
        try {
            const response = await PanierService.AjouterProduitPanier({"id_Utilisateur": utilisateur.id_Utilisateur, "Id_Produits" : produit.Id_Produits, "Montant" : produit.Prix});
            console.log('Réponse du serveur:', response.data);
        } catch (error) {
            console.error(`Erreur lors de l'ajout au panier`, error);
        }
    };

    return (
        <div className='Produit_Details_Presentation'>
            <div className='Produit_Details_img_prix'>
              <img className='Produit_img' src={produit.Image} alt='Produit_img' /> 
              <p>PRIX: {produit.Prix}€</p>
            </div>
            <div className='Produit_Details_Info'>
                <h1 className='Produit_Titre_Info'>RESUMER</h1>
                    <h1 className='Produit_Info'>{produit.Titre}</h1>
                    <p className='Produit_Info'>Editeur : {produit.Editeur}</p>
                    <p className='Produit_Info'>Genre : {produit.Genre}</p>
                    <p className='Produit_Info'>Sortie : {produit.Sortie}</p>
                    <p className='Produit_Info'>Descriptions : {produit.Descriptions}</p>
                    <div className='Produit_Info_Panier'>
                        {utilisateur && (
                            <Link to={`/Panier/${utilisateur.id_Utilisateur}`} onClick={AjouterAuPanier} className='Produit_Dir_Panier'>
                                AJOUTER AU PANIER
                            </Link>
                        )}
                    </div> 
            </div> 
        </div>
    );
};

export default ProduitDetailsComponent;
