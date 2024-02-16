import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../Context/GlobalContext';
import BoutonSupp from '../Images/Bouton-Supp-.png';
// Service
import PanierService from '../Services/PanierService';
// Style
import '../Styles/ProduitsStyle.css';
import '../Styles/PanierStyle.css';

const PanierComponent = ({ id_utilisateur }) => {
  const [produits, setProduits] = useState([]);
  const {utilisateur, isAuthenticated } = useContext(GlobalContext);
  console.log(utilisateur);

  const getProduitPanier = async () => {
    try {
      const response = await PanierService.GetPanier(id_utilisateur);
      setProduits(response.data);
      console.log(response);
    } catch (error) {
      console.error(`Erreur lors de la récupération du panier :`, error);
    }
  };

  const supprimerProduitDuPanier = async (produits) => {
    try {
      await PanierService.SupprimerProduitPanier(produits.Id_Produits);
      getProduitPanier()
    } catch (error) {
      console.error(`La suppression du produit a échoué:`, error);
    }
  };

  useEffect(() => {
    getProduitPanier();
  }, [isAuthenticated]);

  const calculeMontantTotal = (panier) => {
    return panier.reduce((total, produit) => total + produit.Prix, 0);
  };

  return (
    <div className='Panier_Total'>
      <div className='Produit_total_Presentation'>
        {produits.map((produit, index) => (
          <div key={index} className='Produit_Panier_Presentation'>
            <div className='Contenant_Supp'>
              <img className='Supp_Produit_img' src={BoutonSupp} onClick={() => supprimerProduitDuPanier(produit)} alt='Croix_Suppression' />
            </div>
            <img className='Produit_panier_img' src={produit.Image} alt='Produit_img' />
          </div>
        ))}
      </div>
      <div className='Total_Panier_Resumer'>
        <h1 className='titre_panier_resumer'>RESUMER DE VOTRE PANIER</h1>
        {produits.map((produit, index) => (
          <div key={index}>
            <p className='Produit_Panier_Resumer'>{produit.Titre} | Prix: {produit.Prix}€</p>
          </div>
        ))}
        <p>MONTANT TOTAL : {calculeMontantTotal(produits)}€ </p>
          <p>Votre adresse de livraison : <br />{utilisateur.Adresse}</p>
        
        <a className='Lien_CB' href="https://stripe.com/fr" target="_blank">FINALISER L'ACHAT</a>
        {/* Faire appel à une API pour la suite du paiement (=> raison sécurité et non responsabilité) */}
      </div>
    </div>
  );
};

export default PanierComponent;
