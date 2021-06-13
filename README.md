# Healthy Leaf
<p>La Team BoxBout composé de Mélanie Vaubien, Maxime Joullin, Antonin Pulby, Kevin Fagot et Joan Kucukoglu à créé le projet Healthy Leaf. <br>
Un projet permettant de récupérer les données d'une plante (niveau d'eau et niveau de luminosité) en temps réel grâce à une application et un systeme de réseau ZigBee </p> 

## Configuration Firebase 
<p>Un projet firebase est commun aux deux projets NodeJS et React Native qui interagisseront avec celle-ci en temps réel. Pour configurer celle ci, suivre les étapes suivantes : </p>
<p><strong>Si vous êtes un membre de l'équipe</strong>, récupérer le fichier .env partagé et la placer à la racine du dossier /Commandes</p>
<ul>
    <p><strong>Si vous ne faites pas partie de l'équipe :</strong></p>
    <li>Créer un nouveau projet firebase</li>
    <li>Remplacer les données suivantes par les données de votre projet ( contenu trouvable dans la console firebase : https://firebase.google.com/docs/web/setup#add-sdks-initialize )</li>
    <li>Dans le projet Node, remplacer dans le fichier <pre>Commandes/features/database.js</pre> les données de :<pre>firebase.initializeApp()</pre></li>
    <li>Dans le projet React Native, remplacer dans le fichier <pre>RNApp/FlowerApp/dbConfig/firebaseConf.js</pre> les données de :<pre>firebaseConfig</pre></li>
</ul>

## Configuration du projet NodeJS

<p> Afin de récupérer les infomations envoyées par le réseau ZigBee, il faut configuer un projet NodeJS. Il servira aussi de pont vers la base de donnée Firebase</p>
<ul>
<li>Récupérer d'abord toutes les dépendances en lançant depuis la racine /Commandes :<pre>npm install</pre></li>
<li>Lancer ensuite la commande qui lancera le projet :<pre>npm start</pre></li>
</ul>

## Configuration du projet React Native

<p> Afin d'avoir une interface graphique des différentes données du réaseau ZigBee, une application en react Native a été initialisée, pour la configurer et la lancer il faut suivre les étapes suivantes </p>

<p>Pour récupérer toutes les dépendances du projet et installer expo lancer les commandes suivantes
    <pre>npm install</pre> ou 
    <pre>yarn install</pre> puis 
    <pre>expo start</pre>
</p>

<p>L'application mobile devrait se lancer sans soucis</p>
