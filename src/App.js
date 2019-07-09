/*jslint esnext:true, browser:true*/
export default class App {
	static palette() {
		var resultat, tbody, tr, td;
		resultat = document.createElement("table");
		tbody = resultat.appendChild(document.createElement("tbody"));
		for (let r = 0; r < 256; r += 51) {
			tr = tbody.appendChild(document.createElement("tr"));
			for (let g = 0; g < 256; g += 51) {
				for (let b = 0; b < 256; b += 51) {
					td = tr.appendChild(document.createElement("td"));
					td.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
				}
			}
		}
		return resultat;
	}
	static load() {
		return new Promise(resolve => {
			window.addEventListener("load", () => {
				resolve();
			});
		});
	}
}
