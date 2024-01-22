# Demo Web API en express avec une base de donnée
Exemple d'API Restfull avec une base de donnée SQLite

## Package à installer
### Commande :
```
# Initialisation du projet démo
npm init
npm i express express-async-errors yup

# Pour utiliser SQLite
npm i sequelize sqlite3

# Pour utiliser PostgreSQL
npm i sequelize pg pg-hstore

# Dépendence pour le mode "dev"
npm i nodemon --save-dev
```
### Objectif des packages : 
- express : Framework pour créer le serveur API
- express-async-errors : Gestion des erreurs dans du code "async await"
- yup : Bibliotheque de validation de donnée
- sequelize : ORM pour interagir avec une base de donnée
- sqlite3 : Drivers pour utiliser SQLite
- pg & pg-hstore : Drivers pour utiliser PostgreSQL
- nodemon : Outil qui redémarre l'app' lors de la sauvegarde des fichiers

## Endpoint de la demo
Obtenir tout la listes des invités
```
Requete : [GET] /guest
Reponse : 200 - Array
```

Obtenir les infos d'un invité via son id
```
Requete : [GET] /guest/:id
Reponse : 200 - Object
          404 - Not Found
```

Ajouter un invité
```
Requete : [POST] /guest
Reponse : 201 - Object
          422 - Validation Error
```

Supprimer un invité
```
Requete : [DELETE] /guest/:id
Reponse : 204 - Success
          404 - Not Found
```

Modifier les infos d'un invité
```
Requete : [PUT] /guest/:id
Reponse : 204 - Success
          404 - Not Found
```