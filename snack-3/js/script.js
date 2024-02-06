/*

Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi 
fino a quando ne avrà tanti quanti l’altro. 
array da 3 elementi e l'altro da 5, 
eseguite istruzioni sinchè non ne hanno entrambi 5

*/

function repeat() {
    // Inizializza il primo array con 3 elementi
    const array1 = [3, 5, 1];

    // Inizializza il secondo array con 5 elementi
    const array2 = [1, 2, 3, 4, 5];

    // Continua ad aggiungere elementi al primo array finché non ha la stessa lunghezza del secondo array
    while (array1.length < array2.length) {
        // Aggiungi un numero casuale tra 1 e 100 all'array1
        array1.push(Math.floor(Math.random() * 100) + 1);
    }

    // Continua ad aggiungere elementi al secondo array finché non ha la stessa lunghezza del primo array
    while (array1.length > array2.length) {
        // Aggiungi l'elemento corrispondente dall'array1 all'array2
        array2.push(array1[array2.length]);
    }

    // stampa gli array
    document.getElementById("result1").innerHTML = ("Array 1: " + array1);
    document.getElementById("result2").innerHTML = ("Array 2: " + array2);
}

// Aggiungi un listener per eseguire la funzione 'repeat'
document.getElementById("repeat").addEventListener("click", repeat);

// Esegui la funzione 'repeat' automaticamente quando la pagina si carica
repeat();
