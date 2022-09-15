// 1. Créer deux variables prenom et nom
let nom = "GONZALEZ LUNA";
let prenom = "Adalberto";

/*2. Imprimer dans la console la valeur du prénom et du nom : “Le prénom est [valeur] et le nom est [valeur]”*/

console.log(`Le prénom est ${prenom} et le nom est ${nom}`);

/*3. Coder un petit programme qui permet d’imprimer dans la console la variable qui comporte le plus de lettres et donner le nombre de lettres. En fonction de la longueur, imprimer soit :
“Le prénom [valeur] a le plus de lettres et en comporte [nombre de lettres]”
”Le nom [valeur] a le plus de lettres et en comporte [nombre de lettres]”
”Le prénom et le nom ont le même nombre de lettres et en comportent [nombre de lettres]”*/

if (nom.length < prenom.length) {
	console.log(`Le prénom ${prenom} a le plus de lettres et en comporte `+prenom.length);
} else {
	console.log(`Le prénom ${nom} a le plus de lettres et en comporte `+nom.length);
}
  
// 4. Passer la dernière lettre du prénom en lettre capitale

console.log(prenom.slice(0,-1)+prenom.charAt(prenom.length - 1).toUpperCase());

//5. Remplacer la première lettre du prénom par la première lettre du nom

console.log(prenom.replace(prenom[0], nom[0]));

//6. Inverser les lettres du deuxième prénom (par exemple Henri devient irneH)

/*
let arrayPrenom = prenom.split("");
let reverseArrayPrenom = arrayPrenom.reverse();
let joinPrenom = reverseArrayPrenom.join("");
console.log(joinPrenom);
*/

let reversePrenom="";
for (i=1; i<=prenom.length; i++) {
	letter = prenom[prenom.length - i];
	reversePrenom = reversePrenom + letter;
}
console.log(reversePrenom);

//7. Supprimer toutes les voyelles dans la phrase suivante “Alegria Academy Rocks”
let phrase = "Alegria Academy Rocks";
let voyelle = "AaEeIiOoUuYy";
let arrayphrase = phrase.split("");
let arrayvoyelle = voyelle.split("");
console.table(arrayphrase);
console.table(arrayvoyelle);

for (i=0; i<=arrayphrase.length; i++) {
	letter = arrayphrase[i];
	console.log(letter);	
	check = arrayvoyelle.includes(letter);
	if (check === true) {
		arrayphrase.splice(letter,1);
	}
}
console.table(arrayphrase);

// jeu

let ordinateur =  Math.floor(Math.random() * 100)+1;
console.log(ordinateur);
let utilisateur = prompt("une chiffre stp ");
let essais = 1;
while(utilisateur != ordinateur) {
	if (utilisateur > ordinateur) {
		console.log("le numéro est trop haut");
		console.log(ordinateur);
		utilisateur = prompt("un chiffre stp");
	} else if (utilisateur == ordinateur) {
		console.log("tu as gagné !");
	} else {
		console.log("le numéro est trop petit");
		utilisateur = prompt("un chiffre stp");
	}
	essais += 1;
	if (essais == 6) {
		console.log("tu as perdu");
		break
	}
	console.log(essais);
}


