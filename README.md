# Description de l'application "nodejs-example-debug"

Un exemple de base pour déboguer dans Node.js.

## Installer et démarrer

En ligne de commande :

- Pour installer les packages
```
    > npm install
```
- Pour démarrer l’application qui sera disponible à partir de votre navigateur sur localhost:3000
```
    > node server.js
```
- Pour démarrer l’application avec l'affichage dans la console de toutes les informations de débogage
```
    > DEBUG=* node server.js
```
- Pour démarrer l'application avec l'affichage dans la console de toutes les informations de débogage du package express
```
    > DEBUG=express* node server.js
```
- Pour démarrer l'application et afficher dans la console toutes les informations de débogage des données envoyées à partir du package express avec la fonction errorDebug()
```
    > DEBUG=error node server.js
```
- Pour démarrer l'application et afficher dans la console toutes les informations de débogage des données envoyées à partir du package express avec la fonction warnDebug()
```
    > DEBUG=warn node server.js
```
- Pour démarrer l'application avec les deux fonctions de débogage déclarées (warnDebug() & errorDebug())
```
    > DEBUG=warn,error node server.js
```
## LE MODE DE DÉBOGAGE

Pour démarrer le mode de débogage
```
    > node inspect server.js
```
À savoir : la commande 'node debug nameApplication' est dépréciée dans les nouvelles versions de Node.js

Pour sortir du mode de débogage
```
    > .exit
```
Informations supplémentaires sur le mode débogage :
    - Déclaration de fonctions de débogage dans un fichier de l'application
        // Instanciation de fonctions de débogage
```
        debugWarn = debug('warn');
        debugError = debug('error');
        ...
        app.get('/', (req, res) => {
            // Appel de fonction de débogage
            debugError('Une error est survenue');
            debugWarn('Un warning est survenu');

            res.send({
                status : 'Bonjour !'
            });
        });
```
    À PARTIR DE LA CONSOLE   
    - Ligne suivante
```
        > n
```
        Example : 
```
            debug> n
            break in server.js:1
            > 1 (function (exports, require, module, __filename, __dirname) { const express = require('express');
            2 const debug = require('debug');
            3 const app = express();
            debug> n
            break in server.js:2
            1 (function (exports, require, module, __filename, __dirname) { const express = require('express');
            > 2 const debug = require('debug');
            3 const app = express();
            4
```
    - Mode qui permet d'afficher le contenu des variables
```
        > repl
```
        Exemple :
```
            debug> repl
            Press Ctrl + C to leave debug repl
            > express

            Résultat :
                [Function: createApplication]
                >
```
            OU
```
            > console.log(express)

            Résultat :
                < { [Function: createApplication]
                <   application:
                <    { init: [Function: init],
                <      defaultConfiguration: [Function: defaultConfiguration],
                ...
                <   urlencoded: [Function: urlencoded] }
                > undefined
                >
```
### AUTRE CAS D'UTILISATION :
    - L'instruction de débogage "debugger" met en pause l'exécution de l'application
        Exemple :
        Implémentation dans le fichier server.js
``` 
            app.get('/', (req, res) => {
                // Instruction de débogage qui met en pause l'exécution de l'application
                debugger
                res.send({
                    status : 'Bonjour !'
                });
            });
``` 
        À partir de la console
        - Lance le mode de débogage
```  
            > node inspect server.js
``` 
        - Ligne suivante
``` 
            > c
```
