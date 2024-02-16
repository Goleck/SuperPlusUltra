import React, { useEffect, useState } from 'react';
// Service
import ProduitModifService from '../Services/Produits';
// Style
import '../Styles/ProduitsDetailsStyle.css';
import '../Styles/AdminStyle.css';

const AdminModificationComponent = ({ produit }) => {

   const [modificationProduit, setModificationProduit] = useState(produit);
   const [modificationReussie, setModificationReussie] = useState(false);
   const [erreurModification, setErreurModification] = useState(null);

   const handleModif = (e) => {
      const { name, value } = e.currentTarget;
      console.log(modificationProduit);
      setModificationProduit({ ...modificationProduit, [name]: value });
   };

   const AdminModificationProduit = async (e) => {
      e.preventDefault();
      try {
         console.log("Modification du produit :", modificationProduit); 
         const response = await ProduitModifService.AdminModificationService(modificationProduit);
         console.log("Réponse de la modification :", response); 
         setModificationReussie(true);
         setErreurModification(null);
      } catch (e) {
         console.log("Erreur lors de la modification :", e); 
         setModificationReussie(false);
         setErreurModification(e.message); 
      }
   };
   
   useEffect(() => {
     setModificationProduit(produit)
   }, [produit])
   

   if(modificationProduit) {
       return (
      <div className='Admin_Formulaire_Total'>
         <form onSubmit={AdminModificationProduit} method='post'>
            <div className='LForm'>
               <input type="text" name='Titre' value={modificationProduit?.Titre} onChange={handleModif} placeholder="Titre" />
               <br />
               <input type="text" name='Editeur' value={modificationProduit?.Editeur} onChange={handleModif} placeholder="Editeur" />
               <br />
               <input type="text" name='Genre' value={modificationProduit?.Genre} onChange={handleModif} placeholder="Genre" />
               <br />
               <input type="text" name='Sortie' value={modificationProduit?.Sortie} onChange={handleModif} placeholder="Sortie" />
            </div>
            <div className='RForm'>
               <input type="text" name='Image' value={modificationProduit?.Image} onChange={handleModif} placeholder="Image" />
               <br />
               <input type="text" name='Etat' value={modificationProduit?.Etat} onChange={handleModif} placeholder="Etat" />
               <br />
               <input type="text" name='Descriptions' value={modificationProduit?.Descriptions} onChange={handleModif} placeholder="Descriptions" />
               <br />
               <input type="text" name='Prix' value={modificationProduit?.Prix} onChange={handleModif} placeholder="Prix" />
            </div>
            <div className='Button_modif'>
               <button type="submit">MODIFIER LE PRODUIT</button>
            </div>
         </form>
         {modificationReussie && <p>La modification du produit a réussi.</p>}
         {erreurModification && <p>Erreur lors de la modification : {erreurModification}</p>}
      </div>
   );
   }
  
};

export default AdminModificationComponent;
