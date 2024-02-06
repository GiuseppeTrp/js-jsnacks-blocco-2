/*

Inserisci un numero,
 se è pari stampa il numero, 
 se è dispari stampa il numero successivo.

*/

// Definiamo una funzione chiamata 'repeat'
function repeat() {

    // Chiediamo all'utente di inserire un numero o di digitare 'esc'
    let userChoice = prompt("Scegli un numero, oppure digita 'esc'");

    // Continua finché l'utente non digita 'esc'
    while (userChoice != "esc") {

        // Verifichiamo se l'input dell'utente è un numero
        if (!isNaN(userChoice)) { // Se è un numero...

            // Convertiamo l'input dell'utente in un numero
            const userNumber = Number(userChoice);

            // Controlliamo se il numero è pari o dispari
            if (userNumber % 2 == 0) { // Se è pari...

                // Mostriamo il numero sulla pagina HTML
                document.getElementById("result1").innerHTML = userNumber;

            } else { // Se è dispari...

                // Mostriamo il numero successivo sulla pagina HTML
                document.getElementById("result2").innerHTML = (userNumber + 1);
            }

        } else { // Se l'input non è un numero...

            // Informiamo l'utente di inserire un numero valido
            alert("Inserisci un numero");
        }

        // Chiediamo all'utente di inserire un altro numero o di digitare 'esc'
        userChoice = prompt("Scegli un altro numero, o digita 'esc'")
    }

    // Mostriamo 'esc' sulla pagina HTML quando l'utente digita 'esc'
    document.getElementById("result1").innerHTML = "esc";
}

// Aggiungiamo un listener per eseguire la funzione 'repeat' quando si fa clic su un elemento con id "repeat"
document.getElementById("repeat").addEventListener("click", repeat);

// Eseguiamo la funzione 'repeat' automaticamente quando la pagina si carica
repeat();
