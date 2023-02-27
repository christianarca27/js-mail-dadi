const validEmail = ["christian@email.com", "matteo@email.com", "marco@email.com"];

let buttonLoginEl = document.getElementById("btn-login");

buttonLoginEl.addEventListener("click", function() {
    emailInput = document.getElementById("email-input").value;

    let accessoConsentito = false;
    for(let i = 0; i < validEmail.length; i++) {
        if(emailInput == validEmail[i]) {
            accessoConsentito = true;
        }
    }

    if(accessoConsentito) {
        console.log("Giochiamo !");

        let lancioGiocatore = Math.ceil(Math.random() * 6);
        console.log("Numero giocatore: " + lancioGiocatore);

        let lancioComputer = Math.ceil(Math.random() * 6);
        console.log("Numero computer: " + lancioComputer);

        if(lancioGiocatore > lancioComputer) {
            console.log("Hai vinto !");
        }
        else if(lancioGiocatore == lancioComputer) {
            console.log("Pareggio");
        }
        else {
            console.log("Hai perso !");
        }
    }
    else {
        console.log("Accesso negato");
    }
});