// Array contenente gli indirizzi email validi per giocare
const validEmail = ["christian@email.com", "matteo@email.com", "marco@email.com"];

// Leggo e salvo il riferimento al pulsante di inizio gioco
let buttonLoginEl = document.getElementById("btn-login");

// Aggiungo un evento in caso il pulsante di inizio gioco venga cliccato
buttonLoginEl.addEventListener("click", function() {
    // Leggo e salvo il valore inserito nel campo email al momento del click
    emailInput = document.getElementById("email-input").value;

    // - Inizializzo accessoConsentito a false
    // - Confronto uno ad uno gli elementi dell'array per controllare se è presente l'email inserita dall'utente
    // - In caso di match cambio il valore di accessoConsentito a true
    let accessoConsentito = false;
    for(let i = 0; i < validEmail.length; i++) {
        if(emailInput == validEmail[i]) {
            accessoConsentito = true;
        }
    }

    // - Se il valore di accessoConsentito è stato cambiato in true durante il ciclo:
    //      # Estraggo un numero random per il giocatore
    //      # Estraggo un numero random per il computer
    //      # Confronto i due valori e in base al risultato decido l'esito della partita
    // 
    // - Altrimenti:
    //      # Comunico che l'accesso è fallito
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