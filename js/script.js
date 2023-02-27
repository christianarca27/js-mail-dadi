// Array contenente gli indirizzi email validi per giocare
const validEmail = ["christian@email.com", "matteo@email.com", "marco@email.com"];

// Leggo e salvo il riferimento al pulsante di inizio gioco
let buttonLoginEl = document.getElementById("btn-login");

// Aggiungo un evento in caso il pulsante di inizio gioco venga cliccato
buttonLoginEl.addEventListener("click", function() {
    // Leggo e salvo il valore inserito nel campo email al momento del click
    emailInputEl = document.getElementById("email-input")
    emailInput = emailInputEl.value;

    // - Inizializzo accessoConsentito a false
    // - Confronto uno ad uno gli elementi dell'array per controllare se è presente l'email inserita dall'utente
    // - In caso di match cambio il valore di accessoConsentito a true
    let accessoConsentito = false;
    for(let i = 0; i < validEmail.length; i++) {
        if(emailInput == validEmail[i]) {
            accessoConsentito = true;
        }
    }

    let gameEl = document.getElementById("game-table");

    // - Se il valore di accessoConsentito è stato cambiato in true durante il ciclo:
    //      # Estraggo un numero random per il giocatore
    //      # Estraggo un numero random per il computer
    //      # Confronto i due valori e in base al risultato decido l'esito della partita
    // 
    // - Altrimenti:
    //      # Comunico che l'accesso è fallito
    if(accessoConsentito) {
        gameEl.style.color = "black";
        gameEl.innerHTML = "Accesso consentito, giochiamo.. <br>";

        let lancioGiocatore = Math.ceil(Math.random() * 6);

        let lancioComputer = Math.ceil(Math.random() * 6);

        if(lancioGiocatore > lancioComputer) {
            gameEl.innerHTML += "Hai vinto !<br>";
            gameEl.innerHTML += "Dado giocatore : " + lancioGiocatore + "<br>";
            gameEl.innerHTML += "Dado computer : " + lancioComputer;
        }
        else if(lancioGiocatore == lancioComputer) {
            gameEl.innerHTML += "Pareggio !<br>";
            gameEl.innerHTML += "Dado giocatore : " + lancioGiocatore + "<br>";
            gameEl.innerHTML += "Dado computer : " + lancioComputer;
        }
        else {
            gameEl.innerHTML += "Hai perso !<br>";
            gameEl.innerHTML += "Dado giocatore : " + lancioGiocatore + "<br>";
            gameEl.innerHTML += "Dado computer : " + lancioComputer;
        }
    }
    else {
        gameEl.style.color = "red";
        gameEl.innerHTML = "Accesso negato, email non valida.";
    }
    // Svuoto il campo di email per poter iniziare una nuova partita
    emailInputEl.value = "";
});