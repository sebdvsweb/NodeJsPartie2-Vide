// Ce code crée une application Express simple qui permet de visualiser et d'ajouter des personnages Marvel. Il utilise Mustache pour le rendu des vues et bodyParser pour lire les données POST des formulaires. Les personnages sont stockés dans un fichier JSON, qui est lu et écrit à chaque requête.



// Importation des modules nécessaires
const { time, timeStamp } = require('console');
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');


// Importation et configuration de Mustache pour le rendu des vues
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

// Configuration de l'application pour utiliser bodyParser (pour lire les données POST)
app.use(bodyParser.urlencoded({ extended: true }));

// Configuration du moteur de rendu des vues
app.set('views', __dirname + '/views'); // Spécifie le dossier contenant les vues
app.set('view engine', 'mustache'); // Définit Mustache comme moteur de rendu des vues
app.engine('mustache', mustacheExpress()); // Associe Mustache à l'extension de fichier .mustache

// Route GET pour la page d'accueil
app.get('/', (req, res) => {
  // Lecture et parsing du fichier JSON contenant les personnages Marvel
  const personnages = JSON.parse(fs.readFileSync('Marvel.json'));

  // Création d'un message de succès si un personnage a été créé
 
  if(req.query.success === '1'){
    const message = 'Votre personnage à été crée !';
      // Rendu de la vue index avec les données des personnages et le message de succès
  res.render('index', { personnages, message });
  } else{
    const message = " ";
      // Rendu de la vue index avec les données des personnages et le message de succès
  res.render('index', { personnages, message });
  };

});

// Route POST pour ajouter un nouveau personnage
app.post('/', (req, res) => {
  // Lecture et parsing du fichier JSON contenant les personnages Marvel
  const personnages = JSON.parse(fs.readFileSync('Marvel.json'));

  // Création d'un objet représentant le nouveau personnage à partir des données du formulaire
  const nouveauPersonnage = {
    nom: req.body.nom,
    serie: req.body.serie,
    image: req.body.image,
    description: req.body.description,
  };

  // Ajout du nouveau personnage à la liste des personnages
  personnages.push(nouveauPersonnage);

  // Écriture des personnages mis à jour dans le Marvel.Json et indentation automatique grâce aux parametres de Filesystem.
  fs.writeFileSync('Marvel.json', JSON.stringify(personnages, null, 4));

  // Redirection vers la page d'accueil avec un paramètre de succès
  res.redirect('/?success=1');
});

// Démarrage du serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

