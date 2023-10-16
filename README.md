# Blog de Cuisine

Bienvenue dans le blog de cuisine, un site web qui vous permet de découvrir de délicieuses recettes, de les ajouter à vos favoris, et même de contribuer en partageant vos propres créations culinaires. Ce projet a été développé en utilisant React et React Router pour gérer la navigation entre les différentes pages du site.

## Fonctionnalités

- Consultez une liste de recettes de cuisine provenant de [The Meal DB](https://www.themealdb.com/).
- Ajoutez vos propres recettes en remplissant le formulaire dédié.
- Identifiez-vous pour accéder à des fonctionnalités avancées, comme l'ajout de recettes aux favoris.
- Marquez vos recettes préférées en tant que favoris et retrouvez-les facilement.

## Technologies Utilisées

Ce projet a été construit en utilisant les technologies suivantes :

- **React** : Une bibliothèque JavaScript pour la création d'interfaces utilisateur interactives.
- **React Router** : Une bibliothèque de routage pour gérer la navigation entre les différentes pages de l'application.
- **Axios** : Une bibliothèque pour effectuer des requêtes HTTP pour obtenir des données de l'API.
- **CSS** : Le style de l'application a été personnalisé en utilisant CSS pour un design attrayant.

## Comment exécuter le projet

1. Clonez ce dépôt sur votre ordinateur.
2. Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé.
3. Ouvrez le terminal dans le répertoire du projet et exécutez la commande suivante pour installer les dépendances :
   ```
   npm install
   ```
4. Ensuite, exécutez la commande suivante pour lancer l'application en mode développement :
   ```
   npm start
   ```
   L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Guide de l'Application

### Page d'Accueil

La page d'accueil affiche une liste de recettes provenant de The Meal DB. Vous pouvez cliquer sur une recette pour voir les détails.

### Page de Détails de la Recette

Sur la page de détails de la recette, vous pouvez voir des informations plus détaillées sur la recette, y compris son nom, une image, et les instructions de préparation. Vous avez également la possibilité d'ajouter la recette à vos favoris en cliquant sur le bouton correspondant un icon marquera alors les plat marqué en favoris.

### Formulaire d'Ajout de Recette

Vous pouvez ajouter vos propres recettes en utilisant le formulaire d'ajout de recette. Remplissez les champs requis, y compris le nom de la recette, l'URL de l'image et une description. Après avoir soumis le formulaire, votre recette sera ajoutée à la liste.

### Authentification

Pour accéder aux fonctionnalités avancées telles que l'ajout de recettes aux favoris, vous pouvez vous authentifier en cliquant sur le bouton "S'identifier" dans l'en-tête. Vous devrez fournir un nom, une adresse e-mail valide et un mot de passe conforme aux critères spécifiés.

## Personnalisation

Vous pouvez personnaliser le design de l'application en modifiant les variables CSS définies dans le fichier `App.css`. Les couleurs principales et secondaires sont définies comme des variables CSS, ce qui facilite la personnalisation.

## Contributeurs

Ce projet a été réalisé par Matt Willems pour les amateurs de cuisine et de développement web.
