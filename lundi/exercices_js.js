// 1) Initialiser une chaîne de caractère, la modifier pour y concatérer une autre chaîne et afficher le résultat dans la console
let monNom = "James";
monNom += " Bond";
monNom

// 2) Déclarer une fonction qui prend en paramètres 2 nombres et renvoie le plus grand des deux
var nombreA = 42;
var nombreB = 1337;

var biggest = quiEstLePlusGrand(nombreA, nombreB);

function quiEstLePlusGrand(a, b) {
    if (b > a) {
        return b;
    } else {
        return a;
    }
}

// 3) Déclarer un objet famille possédant comme propriétés les membres que vous voulez présenter et afficher ces membres grâce à une boucle for
var famille = {
    maman:  'Leia',
    papa:  'Harrison',
    frere:  'Harry',
    tata: 'Ron',
    mamie: 'Voldemort',
    cousin1: 'Pauline',
    cousin2: 'Clarisse'		
}

for (var membre in famille) {
    console.log(membre + ' : ' + famille[membre]);
}