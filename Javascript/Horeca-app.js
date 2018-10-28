drank();

function drank() {
	alert ("Welkom bij ons cafe!")
	var drinken = prompt ("Welke bestelling wilt u toegevoegen? fris, bier of wijn?")




	
			if (drinken != "stop") {
			if (snack   != "stop") {
				var quantity = prompt ("Hoeveel " + drinken + " wilt u?")	
				var snack = prompt ("U kunt ook nog bitterballen krijgen (Type oke om verder te gaan)")

			if (drinken =="fris") {
				document.write ("U heeft " + quantity + " " + drinken + " besteld <br> ")
			}

			if (drinken =="bier") {
				document.write ("U heeft " + quantity + " " + drinken + " besteld <br> ")
			}

			
			if (drinken =="wijn") {
				document.write ("U heeft " + quantity + " " + drinken + " besteld <br> ")
			}
			



			if (snack == "oke") {

				var amount 	= prompt ("'Hoeveel bitterbalschalen van aantal stuks wilt u bestellen (8 of 16) ")
			}
			
			if (amount == "8") {

				document.write ("En u heeft " + amount + " " + "bitterballen" + " besteld <br> " );
			}

			else if (amount == "16") {

				document.write ("En u heeft " + amount + " " + "bitterballen" + " besteld <br> ");
			}

			else {
				alert ("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling");
				drank();
				return;
			}

	
	var fris 			= 1;
	var bier 			= 2;
	var wijn 			= 3;
	var bitterballen 	= 7;


	if (drinken == 'fris') {
		document.write ("De " + quantity + " fris kost(en)" + ' ' + '&euro;' + fris * quantity + "<br/>");
	}
		
	if (drinken == 'bier') {
		document.write ("De " + quantity + " bier kost(en)" + ' ' + '&euro;' + bier * quantity + "<br/>");
	}

	if (drinken == 'wijn') {
		document.write ("De " + quantity + " wijn kost(en)" + ' ' + '&euro;' + wijn * quantity + "<br/>");
	}

	if (snack == "oke") { 
		document.write ("De " + amount + " schalen bitterballen kosten" + ' ' + '&euro;' + bitterballen * amount + "<br/>");
	}
			alert ("Type 'stop' als u wilt eindigen.")	
drank();


							
							}
						}
					}
			 
	

