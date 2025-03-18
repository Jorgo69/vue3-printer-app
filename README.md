# printer-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
------------------
npm install

Initalisation de Vue avec npm 20:

`npm create vue@latest` donc vue3

- Router ( développement SPA (Single Page Application) )

- Pinia (gestion de l'état ) [Si votre application doit gérer des données partagées entre plusieurs composants (par exemple, les paramètres de l'imprimante), Pinia sera très utile.]

- ESLint (prévention des erreurs)

- Prettier (formatage du code)



_________________


Voici les étapes pour builder et déployer votre application Vue.js sur Surge :

1. Build votre projet Vue.js
Vue.js utilise Vite (ou Webpack, selon votre configuration) pour compiler et optimiser votre projet en fichiers statiques.

a. Exécutez la commande de build
Dans le terminal, à la racine de votre projet, exécutez :

bash
Copy
npm run build
ou si vous utilisez Yarn :

bash
Copy
yarn build
b. Résultat du build
Une fois la commande terminée, un dossier dist sera créé à la racine de votre projet. Ce dossier contient tous les fichiers statiques nécessaires pour déployer votre application.

2. Installer Surge
Si vous n'avez pas encore installé Surge, vous pouvez l'installer globalement via npm :

bash
Copy
npm install -g surge
ou avec Yarn :

bash
Copy
yarn global add surge
3. Déployer sur Surge
Maintenant que votre projet est buildé et que Surge est installé, vous pouvez déployer votre application.

a. Déployer le dossier dist
Dans le terminal, naviguez vers le dossier dist et exécutez la commande suivante :

bash
Copy
cd dist
surge
b. Suivre les instructions
Surge vous demandera de vous connecter ou de créer un compte si c'est la première fois que vous l'utilisez.

Ensuite, il vous demandera de choisir un domaine. Vous pouvez soit :

Utiliser un domaine aléatoire fourni par Surge (par exemple, random-name.surge.sh).

Spécifier un domaine personnalisé si vous en avez un.

c. Confirmer le déploiement
Une fois le domaine choisi, Surge déploiera votre application. Vous recevrez un message comme celui-ci :

Copy
Success! Project is published and running at https://your-domain.surge.sh
4. Accéder à votre application
Vous pouvez maintenant accéder à votre application en visitant l'URL fournie par Surge (par exemple, https://your-domain.surge.sh).

5. Options supplémentaires
a. Déployer avec un domaine personnalisé
Si vous avez un domaine personnalisé, vous pouvez l'utiliser avec Surge. Par exemple :

bash
Copy
surge dist your-domain.com
b. Configurer un fichier CNAME
Si vous utilisez un sous-domaine personnalisé (par exemple, app.your-domain.com), vous pouvez créer un fichier CNAME dans le dossier dist avec le contenu suivant :

Copy
app.your-domain.com
Ensuite, déployez avec :

bash
Copy
surge dist
c. Redéployer après des modifications
Si vous apportez des modifications à votre application, vous devez :

Rebuilder votre projet (npm run build).

Redéployer sur Surge (surge dist).

6. Exemple de workflow complet
Voici un exemple de workflow pour déployer une mise à jour :

bash
Copy
# 1. Builder le projet
npm run build

# 2. Naviguer dans le dossier dist
cd dist

# 3. Déployer sur Surge
surge
7. Résultat
Votre application Vue.js est maintenant en ligne et accessible à l'URL fournie par Surge. Vous pouvez partager cette URL avec d'autres personnes pour qu'ils puissent voir votre travail.

Problème de RouterLink et de routes
Si votre application utilise RouterLink et des routes avec Vue Router, vous devez vous assurer que Surge est configuré pour gérer correctement les routes.

a. Créer un fichier 200.html
Dans le dossier dist, créez un fichier 200.html et copiez-y le contenu de index.html. Cela permet à Surge de rediriger toutes les routes vers index.html, ce qui est nécessaire pour les applications Vue.js utilisant le mode history de Vue Router.

bash
Copy
cp index.html 200.html


Domaine: ibra-printer-app.surge.sh


-----------------------------
Creer une nouvelle branch et heberger dessus

1. Créer une nouvelle branche à partir de main
a. Assurez-vous que votre dépôt est à jour
Avant de créer une nouvelle branche, synchronisez votre dépôt local avec la branche main :
```
git checkout main       # Basculer sur la branche main
git pull origin main    # Mettre à jour la branche main
```

b. Créer une nouvelle branche
Créez une nouvelle branche à partir de main. Par exemple, nommez-la feature/new-feature :
git checkout -b feature/new-feature
git checkout -b : Crée une nouvelle branche et bascule dessus.

feature/new-feature : Remplacez ce nom par celui de votre choix (par exemple, dev, staging, etc.).

2. Travailler sur la nouvelle branche
a. Faites vos modifications
Ajoutez ou modifiez des fichiers dans votre projet. Par exemple :

```
git add .                     # Ajouter tous les fichiers modifiés
git commit -m "Ajout d'une nouvelle fonctionnalité"
```

3. Pousser la nouvelle branche vers le dépôt distant
Poussez votre nouvelle branche vers le dépôt distant (GitHub, GitLab, etc.) :
```
git push origin feature/new-feature
```

origin : Le nom du dépôt distant (par défaut, c'est origin).

feature/new-feature : Le nom de votre nouvelle branche.

----------------

```
# Récupérer les dernières modifications
git fetch origin

# Basculer sur ubuntu-dev
git checkout ubuntu-dev

# Fusionner win-dev dans ubuntu-dev
git merge origin/win-dev

# Résoudre les conflits (si nécessaire)
# Pousser les modifications (optionnel)
git push origin ubuntu-dev

```

sm: ≥640px
md: ≥768px
lg: ≥1024px
xl: ≥1280px
2xl: ≥1536px