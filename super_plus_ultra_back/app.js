const express = require("express");
const cors = require("cors");
 // Modules
const jeux = require("./Modules/JeuxModules");
const Magazine = require("./Modules/MagazineModules");
const Console = require("./Modules/ConsoleModules");
const Accessoire = require("./Modules/AccessoireModules");
const All_In = require("./Modules/All_InModules");
const All_In6 = require("./Modules/All_In6Modules");
const Details = require("./Modules/ProduitsDetailsModules");
const utilisateur = require("./Modules/UtilisateurModules");
const panier = require("./Modules/PanierModules");

const app = express();
const port = 3000; 

app.use(express.json());
app.use(cors());
  
app.get("/", (req, res) => {
  res.send("HELLO!"); // super
});

app.use("/", jeux);
app.use("/", Magazine);
app.use("/", Console);
app.use("/", Accessoire);
app.use("/", All_In);
app.use("/", All_In6);
app.use("/Details", Details);
app.use("/", utilisateur)
app.use("/Panier", panier)


app.listen(port, () => {
  console.log(`L'Application est à l'écoute sur le port http://127.0.0.1:${port}/ !`);
});