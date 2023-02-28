const { time, timeStamp } = require('console');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<a href="/ma-page">Accédez au formulaire ici </a>');
})

app.get('/ma-page', (req, res) => {
    res.send('Remplissez le formulaire ci-contre pour créer un fichier dans VSCode : <form action="/creer-fichier"><input type="text" name="mon_input"><input type="submit"></form>');
})

app.get('/creer-fichier', (req, res) => {
    const fs = require('fs');
    const content = req.query.mon_input;
    const dateObj  = new Date();
 
    let month = dateObj.getMonth();

    // To make sure the month always has 2-character-format. For example, 1 => 01, 2 => 02
    
    let date = dateObj.getDate();

    // To make sure the date always has 2-character-format
    
    let hour = dateObj.getHours();

    // To make sure the hour always has 2-character-format
    
    let minute = dateObj.getMinutes();

    // To make sure the minute always has 2-character-format
    
    let second = dateObj.getSeconds();

    // To make sure the second always has 2-character-format
    
    const time = `${date} à ${hour}h${minute}min${second}sec`;
    //new Date().toISOString().slice(0, 10);
    

    try {
        fs.writeFileSync('fichiers_TXT/Test_du_' + time  + '.txt', content);
        res.send("Fichier créé !");
    } catch (err) {
        console.error(err);
        res.send("Echec de création du fichier.");
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
})




