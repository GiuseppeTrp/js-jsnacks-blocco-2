/*
Genera un numero casuale tra 1 e 100
e poi chiedi all'utente di indovinare il numero. 
Il programma poi deve far comparire un messaggio "il numero è troppo alto" 
oppure "il numero è troppo basso" nel momento in cui
il numero detto dall'utente non è perfettamente uguale al numero estratto 
in modo casuale.
Quando l'utente trova il numero, fateglielo sapere!

*/


// Fa ripetere l'operazione all'utente
function repeat() {
    // Genera un numero casuale da 1 a 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    

    // Chiede all'utente di indovinare il numero
    let userNumber = prompt("Indovina il numero da 1 a 100");
       
    // Ciclo che continua finché l'utente non indovina il numero(finchè userNumber è diverso da randomnaber)
    while (parseInt(userNumber) !== randomNumber) {

        // Verifica se l'input non è un numero
        if (isNaN(userNumber)) {
            // se non lo è esegui un prompt e dopo di che ripeti la funzione
            alert("Hai inserito caratteri non consentiti, inserisci solo numeri.");
            repeat();
        } else {
            // Verifica se il numero inserito è troppo alto o troppo basso
            if (parseInt(userNumber) > randomNumber) {
                userNumber = prompt("Sbagliato! Numero troppo alto! Ritenta!");
            } else if (parseInt(userNumber) < randomNumber) {
                userNumber = prompt("Sbagliato! Numero troppo basso! Ritenta!");
            }
            // Una volta che l'utente ha indovinato, mostra un messaggio
            document.getElementById("result").innerHTML = "Bravo, hai indovinato!";
        }
    }
}

// Ripeti la funzione al click
document.getElementById("repeat").addEventListener("click", repeat);

// Avvia automaticamente quando la pagina si carica
repeat();
