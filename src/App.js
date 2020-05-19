/*jslint esnext:true, browser:true*/
export default class App {
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
