window.addEventListener('load', function() {
	//stran nalozena
		
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});

var izvediPrijavo = function(event) {
	var uporabnikIme = document.querySelector("#uporabnisko_ime").value;
	var nodeIme = document.createTextNode(uporabnikIme);
	document.getElementById("uporabnik").appendChild(nodeIme);
	document.getElementsByClassName("pokrivalo")[0].style.display = 'none';
}