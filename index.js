const { time, timeStamp } = require('console');
const express = require('express')
const app = express()
const port = 3000
const mustacheExpress = require('mustache-express');
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.set('views',  __dirname + "/views"); //Quel est le dossier dans lequel on range les views
app.set('view engine', 'mustache'); // Variable de config.
app.engine('mustache', mustacheExpress());// Quest-ce que Mustache ? => instance de mustacheExpress


app.get('/', (req, res) => {
  const personnages = JSON.parse(fs.readFileSync('Marvel.json'));
  const message = req.query.success === "1" ? "Votre personnage à été crée !" : ""
  
  res.render('index', { personnages, message});
});

app.post('/', (req, res) => {
  const personnages = JSON.parse(fs.readFileSync('Marvel.json'));
  const nouveauPersonnage = {
    nom: req.body.nom,
    serie: req.body.serie,
    image: req.body.image,
    description: req.body.description
  };
  personnages.push(nouveauPersonnage);
  fs.writeFileSync('Marvel.json', JSON.stringify(personnages, null, 4));
  res.redirect('/?success=1');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
})


