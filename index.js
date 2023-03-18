const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<a href="/ma-page">Hello World 1 !</a>')
})

app.get('/ma-page', (req, res) => {
  res.send('<form action="/creer-fichier"><input type="text" name="mon_input"><input type="submit"</form>')
})


app.get('/creer-fichier', (req, res) => {
  const fs = require('fs');

  const content = req.query.mon_input;

  try {
      fs.writeFileSync('Fichier_TXT/test.txt', content);
      res.send("Fichier créé !");
  } catch (err) {
      console.error(err);
      res.send("Echec de création du fichier.");
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const mustacheExpress = require('mustache-express');
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.set('views',  __dirname + "/views"); //Quel est le dossier dans lequel on range les views
app.set('view engine', 'mustache'); // Variable de config.
app.engine('mustache', mustacheExpress());// Quest-ce que Mustache ? => instance de mustacheExpress