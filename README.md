# Healthy Leaf
<p>La Team BoxBout composé de Mélanie Vaubien, Maxime Joullin, Antonin Pulby, Kevin Fagot et Joan Kucukoglu à créé le projet Healthy Leaf. <br>
Un projet permettant de récupérer les données d'une plante (niveau d'eau et niveau de luminosité) en temps réel grâce à une application et un systeme de réseau ZigBee </p> 

## Configuration Firebase 
<p>Un projet firebase est commun aux deux projets NodeJS et React Native qui interagisseront avec celle-ci en temps réel. Pour configurer celle ci, suivre les étapes suivantes : </p>

## Configuration du projet NodeJS

<p> Afin de récupérer les infomations envoyées par le réseau ZigBee, il faut configuer un projet NodeJS. Il servira aussi de pont vers la base de donnée Firebase</p>

## Configuration du projet React Native

<p> Afin d'avoir une interface graphique des différentes données du réaseau ZigBee, une application en react Native a été initialisée, pour la configurer et la lancer il faut suivre les étapes suivantes </p>

<ul><strong>Connecter Firebase dans React Native</strong>
  <li>En se rendant dans le fichier <strong>firebaseConf.js</strong> au répertoire <pre>RNApp/FlowerApp/dbConfig</pre> remplacer le contenu de la variable firebaseConfig par les datas correspondants à celle de votre projet firebase (contenu trouvable dans la console firebase : https://firebase.google.com/docs/web/setup#add-sdks-initialize </li>
  <li>Pour récupérer toutes les dépendances du projet et installer expo lancer les commandes suivantes
    <pre>npm install</pre> ou <pre>yarn install</pre> puis <pre>expo start</pre></li>
</ul>
<p>L'application mobile devrait se lancer sans soucis</p>
