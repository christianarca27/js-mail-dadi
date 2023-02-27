// Array contenente gli indirizzi email validi per giocare
const validEmail = ["christian@email.com", "matteo@email.com", "marco@email.com"];
const diceFaces = ["fa-dice-one", "fa-dice-two", "fa-dice-three", "fa-dice-four", "fa-dice-five", "fa-dice-six"];

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

    let messageEl = document.getElementById("message");

    let gameTableEl = document.getElementById("game-table");

    let resultEl = document.getElementById("result");

    // - Se il valore di accessoConsentito è stato cambiato in true durante il ciclo:
    //      # Estraggo un numero random per il giocatore
    //      # Estraggo un numero random per il computer
    //      # Confronto i due valori e in base al risultato decido l'esito della partita
    // 
    // - Altrimenti:
    //      # Comunico che l'accesso è fallito
    if(accessoConsentito) {
        messageEl.style.color = "black";
        messageEl.innerText = "Accesso consentito, giochiamo..";

        let playerDiceEl = document.getElementById("player-dice");
        playerDiceEl.className = "fa-solid fa-10x";
        let computerDiceEl = document.getElementById("computer-dice");
        computerDiceEl.className = "fa-solid fa-10x";

        let lancioGiocatore = Math.ceil(Math.random() * 6);
        console.log("Dado giocatore: " + lancioGiocatore);
        playerDiceEl.classList.add(diceFaces[lancioGiocatore - 1]);


        let lancioComputer = Math.ceil(Math.random() * 6);
        console.log("Dado computer: " + lancioComputer);
        computerDiceEl.classList.add(diceFaces[lancioComputer - 1]);

        if(lancioGiocatore > lancioComputer) {
            resultEl.innerText = "Hai Vinto !"
        }
        else if(lancioGiocatore == lancioComputer) {
            resultEl.innerText = "Pareggio"
        }
        else {
            resultEl.innerText = "Hai Perso !"
        }

        gameTableEl.style.display = "flex";
        resultEl.style.display = "flex";
    }
    else {
        gameTableEl.style.display = "none";
        resultEl.style.display = "none";
        
        messageEl.style.color = "red";
        messageEl.innerText = "Accesso non consentito, inserisci un indirizzo email valido.";
    }
    // Svuoto il campo di email per poter iniziare una nuova partita
    emailInputEl.value = "";
});