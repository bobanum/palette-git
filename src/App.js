/*jslint esnext:true, browser:true*/
export default class App {
	
	/**
	 * Méthode principale. Est appelée par la page HTML.
	 */
	static main() {
		this.app = document.getElementById("app");
		this.app.appendChild(this.palette());
	}
	/**
	 * Méthode principale. Retourne le tableau HTML de la palette de couleur.
	 */
	static palette() {
		var resultat, section, rangee, cellule, saut;
		saut = 51;
		resultat = document.createElement("table");
		section = resultat.appendChild(document.createElement("tbody"));
		for (let r = 0; r < 256; r += saut) {
			rangee = section.appendChild(document.createElement("tr"));
			for (let g = 0; g < 256; g += saut) {
				for (let b = 0; b < 256; b += saut) {
					cellule = rangee.appendChild(document.createElement("td"));
					let maCouleur = this.couleur(r, g, b);
					cellule.style.backgroundColor = maCouleur;
				}
			}
		}
		return resultat;
	}
	/**
	 * Retourne une couleur au format CSS
	 * @param   {number} rouge La valeur décimale pour le rouge (0-255)
	 * @param   {number} vert  La valeur décimale pour le vert (0-255)
	 * @param   {number} bleu  La valeur décimale pour le bleu (0-255)
	 * @returns {string} Une couleur au format "rgb(255,255,255)"
	 */
	static couleur(rouge, vert, bleu) {
		var resultat = "rgb(" + rouge + "," + vert + "," + bleu + ")";
		return resultat;
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns {Promise} La promesse qui sera résolue après chargement
	 */
	static load() {
		return new Promise(resolve => {
			window.addEventListener("load", () => {
				resolve();
			});
		});
	}
}


/*
Le but de cet exercice n'est pas de le réussir, mais bien d'identifier les endroits où ça accroche.
Important : Notez scrupuleusement (pour vous-même) vos pensées et votre cheminement logique pendant l'exercice.

A) Ajoutez la méthod main.
   -->  :)  Mettez un sourire au bonhomme lorsque c'est fait.
   ==>	Voir le code ci-dessus.
   
B) Nommez TOUTES les variables de la méthode palette.
   -->	resultat, section, rangee, cellule, r, g, b

C) Dites combien de fois seront executées les lignes suivantes (Oui, ça prend une calculatrice):
   09 -->	1
   11 -->	6
   14 -->	216

D) Dites ce qui se passerait si on changeait les nombres 51 par 1
   -->	On aurait TOUTES les couleurs possibles : 16777216. Un tableau de 65536x256 au lieu de 36x6

E) Créez la variable saut, donnez-lui la valeur 51, et adaptez le reste du code.
   -->  :)  Mettez un sourire au bonhomme lorsque c'est fait.
   ==>	Voir le code ci-dessus.

F) Inversez les lignes 11 et 12, et expliquez ce qui se passe.
   -->	Un tableau de 6x36 (vertical)

G) Créez la méthode couleur en prenant une portion de la ligne 15. Utilisez cette méthode dans la méthode palette
   -->  :)  Mettez un sourire au bonhomme lorsque c'est fait
   ==>	Voir le code ci-dessus.

H) À la ligne 9, il y a les méthodes createElement et appendChild. 
   Dites à un non initié ce que l'on doit mettre comme paramètre à chacune.
   --> createElement	: On met le nom de l'élément html (balise) que l'on veux créer div, table , form, etc.
   --> appendChild		: On met un élément HTML. Cet élément va se retrouver dans l'élément qui appelle la méthode.
   
I) Gontrand a écrit l'instruction suivante : 
   page.setAttribute("class", "titre");
   Comment pourriez-vous améliorer son code ?
   -->	page.classList.add("titre");

J) Si Je vous dit que la ligne 15 pourrait également s'écrire :
   cellule.style["background-color"] = "rgb(" + r + "," + g + "," + b + ")";
   Donnez l'équivalent de l'instruction fictive :
   cellule.style.fontSize = taille + "px";
   --> cellule.style["font-size"] = taille + "px";
   Donnez l'équivalent inverse de :
   cellule.style["line-height"] = "2";
   --> cellule.style.lineHeight = "2";

K) Si Je vous dit que la ligne 15 pourrait également s'écrire :
   cellule.style.setProperty("background-color", "rgb(" + r + "," + g + "," + b + ")");
   Donnez l'équivalent de l'instruction fictive :
   cellule.style.color = "red";
   --> cellule.style.setProperty("color", "red");
   Donnez l'équivalent inverse de :
   cellule.style.setProperty("border-width", "1px");
   --> cellule.style.borderWidth = "1px";
*/