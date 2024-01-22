# Demo Web API en express avec une base de donnée
Exemple d'API Restfull avec une base de donnée SQLite (in memory)

## Package à installer
```cmd
# Commande pour la démo (SQLite)
npm i express sequelize sqlite3

# Commande Alternative pour PostgreSQL
npm i express sequelize pg pg-hstore

# Commande pour le mode "dev"
npm i nodemon --save-dev
```

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