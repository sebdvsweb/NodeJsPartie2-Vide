Exercice 1 

Ce code crée une application Express simple qui utilise Mustache pour le rendu des vues et bodyParser pour lire les données POST des formulaires. La route GET pour la page d'accueil rend la vue 'mon-template' avec un objet contenant la propriété 'MyName' et la valeur "Maxime".

- Création de "mon-template.mustache" dans lequel crée une base HTML avec un h1 contenant une variable "MyName".
- Création d'un index.Js contenant tous les parametres du moteur de views ainsi qu'une route Get définissant la variable "MyName"




Exercice 2

Ce code crée une application Express simple qui permet de visualiser et d'ajouter des personnages Marvel. Il utilise Mustache pour le rendu des vues et bodyParser pour lire les données POST des formulaires. Les personnages sont stockés dans un fichier JSON, qui est lu et écrit à chaque requête.

Mustache
- Création d'un fichier "index.mustache" contenant un formulaire HTML avec les input suivants :
    - Nom
    - Serie
    - Image
    - Description

- Création d'une liste des varaibles obtenues afin d'afficher le contenu de notre BDD Json.


JSON
- Création d'un fichier Json "Marvel.json" contenant :
[
    {
        "nom": "Iron Man",
        "serie": "Iron Man",
        "image": "https://is3-ssl.mzstatic.com/image/thumb/ZypiNEdbU0wwCF0GMJ3zoA/1200x675mf.jpg",
        "description": "Iron Man est un super-héros de bande dessinée américaine créé en 1963 par Stan Lee, Larry Lieber, Don Heck et Jack Kirby. Il est apparu pour la première fois dans Tales of Suspense #39."
    },
    {
        "nom": "Spider-Man",
        "serie": "The Amazing Spider-Man",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Web_of_Spider-Man_Vol_1_129-1.png/220px-Web_of_Spider-Man_Vol_1_129-1.png",
        "description": "Spider-Man est un super-héros de bande dessinée américaine créé en 1962 par Stan Lee et Steve Ditko. Il est apparu pour la première fois dans Amazing Fantasy #15."
    }
]


Javascript
- Création de l'index.js avec tous les parametres et la cocnfiguration du moteur de views (n'hésitez pas à vous inspirer du premier exercice ! )

    - Création de la 1ere route get affichant la page d'accueil contenant notre formulaire et notre liste de personnages.
    - Création d'un message de succès si un personnage a été créé (if else une valuer success retournée lors de la validation du formulaire)
    
    - Création de la route post afin d'envoyer la "REQUEST" à notre base de données Json. 
    - Utilisation du .push pour valider l'envoi des données dans la "REQUEST".
    - Écriture des personnages mis à jour dans le Marvel.Json et indentation automatique grâce aux parametres de Filesystem :
        `fs.writeFileSync('Marvel.json', JSON.stringify(personnages, null, 4));`


Templating
- Installation de pico CSS et perfectionnement de la page.