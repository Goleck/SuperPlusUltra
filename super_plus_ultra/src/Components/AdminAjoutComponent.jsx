import React, { useState } from 'react';
// Service
import ProduitAjoutService from '../Services/Produits';
// Style
import '../Styles/AdminStyle.css';

const AdminAjoutComponent = () => {

   const [nouveauProduit, setNouveauProduit] = useState({
      Titre: '',
      Editeur: '',
      Genre: '',
      Sortie: '',
      Image: '',
      Etat: '',
      Descriptions: '',
      Quantite: '',
      Prix: '',
      Id_Categorie: ''
   });

   const handleAjoutProduit = (e) => {
      const { name, value } = e.currentTarget;
      setNouveauProduit({ ...nouveauProduit, [name]: value });
   };

   const AdminAjouterProduit = async (e) => {
      e.preventDefault();
      try {
         const response = await ProduitAjoutService.AjouterProduit(nouveauProduit);
         console.log(response);
      } catch (error) {
         console.error('Échec de l ajout du produit :', error);
      }
   };
   
   return (
      <div className='Formulaire_Inscription_Total'>
         <form onSubmit={AdminAjouterProduit}>
            <div className='Form'>
               <input type="text" name="Titre" value={nouveauProduit.Titre} onChange={handleAjoutProduit} required placeholder="Titre"/>
               <br />
               <input type="text" name="Editeur" value={nouveauProduit.Editeur} onChange={handleAjoutProduit} required placeholder="Editeur" />
               <br />
               <input type="text" name="Genre" value={nouveauProduit.Genre} onChange={handleAjoutProduit} required placeholder="Genre" />
               <br />
               <input type="text" name="Sortie" value={nouveauProduit.Sortie} onChange={handleAjoutProduit} required placeholder="Sortie" />
               <br />
               <input type="text" name="Image" value={nouveauProduit.Image} onChange={handleAjoutProduit} required placeholder="Image"/>
               <br/>
               <input type="text" name="Etat" value={nouveauProduit.Etat} onChange={handleAjoutProduit} required placeholder="Etat"/>
               <br/>
               <input type="text" name="Descriptions" value={nouveauProduit.Descriptions} onChange={handleAjoutProduit} required placeholder="Descriptions"/>
               <br/>
               <input type="text" name="Quantite" value={nouveauProduit.Quantite} onChange={handleAjoutProduit} required placeholder="Quantite"/>
               <br/>
               <input type="text" name="Prix" value={nouveauProduit.Prix} onChange={handleAjoutProduit} required placeholder="Prix"/>
               <br/>
               <input type="text" name="Id_Categorie" value={nouveauProduit.Id_Categorie} onChange={handleAjoutProduit} required placeholder="Id_Categorie"/>
               <br/>
               <button type="submit">AJOUTER PRODUIT</button>
            </div>
         </form>
      </div>
   );
};

export default AdminAjoutComponent;
