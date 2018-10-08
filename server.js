const express = require('express');
const debug = require('debug');
const app = express();

// Instanciation des fonctions de débogage
debugWarn = debug('warn');
debugError = debug('error');

app.get('/', (req, res) => {

  // Appel des fonctions de débogage
  /* debugError('Une error est survenue');
  debugWarn('Un warning est survenu'); */

  // Instruction de débogage qui met en pause l'exécution de l'application
  debugger

  res.send({
    status : 'Bonjour !'
  });
});

app.listen(3000);
