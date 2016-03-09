window.addEventListener('load', function() {
	//stran nalozena
		
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
	document.querySelector("#dodajGumb").addEventListener('click', oddajOpomnik);
		
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
			if (cas == 0) {
				var zad = document.getElementById("zad").innerHTML;
				alert("Opomnik!\n\nZadolžitev "+zad+" je potekla!");
				document.getElementById("opomniki").removeChild(opomnik);  
			}
			else {
				cas = cas - 1;
				opomnik.querySelector("span").innerHTML = cas;
			}
		}
	}
	setInterval(posodobiOpomnike, 1000);


	function izvediPrijavo() {
		var uporabnikIme = document.querySelector("#uporabnisko_ime").value;
		var nodeIme = document.createTextNode(uporabnikIme);
		document.getElementById("uporabnik").appendChild(nodeIme);
		document.getElementsByClassName("pokrivalo")[0].style.display = 'none';
	}
	
	function oddajOpomnik() {
		var zadolzitev = document.getElementById("naziv_opomnika").value;
		var cas = document.getElementById("cas_opomnika").value;
		document.getElementById("naziv_opomnika").value = "";
		document.getElementById("cas_opomnika").value = "";

		var div = document.createElement('div');

    	div.className = 'opomnik';

		div.innerHTML = '<div class="naziv_opomnika" id="zad">'+zadolzitev+'</div>\
            			<div class="cas_opomnika"> Opomnik čez <span>'+cas+'</span> sekund.</div>';

     	document.getElementById('opomniki').appendChild(div);
		
	}
	
});

