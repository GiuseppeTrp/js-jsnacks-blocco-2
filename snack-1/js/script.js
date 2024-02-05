// Funzione per far ripetere l'operazione all'utente
function repeat() {
    // Svuota l'array e reimposta la somma all'inizio di ogni ciclo
    let numberList = [];
    let sum = 0;

    // Limite massimo per la somma
    let max = 50;

    // Azzera il contenuto di result e difference
    document.getElementById("result").innerHTML = "";
    document.getElementById("difference").innerHTML = "";

    // Ciclo che continua finché la somma è minore di max
    while (sum < max) {
        // Chiedi all'utente di inserire un numero 
        const userNumber = prompt("Inserisci un numero");

        // Verifica se l'input è un numero
        if (!isNaN(userNumber)) {
            // Se lo è, aggiungi il numero inserito a numberList
            numberList.push(+userNumber);

            // Aggiorna la somma aggiungendo i numeri inseriti
            sum += +userNumber;

            // Verifica se la somma supera il valore di max
            if (sum > max) {
                // Se lo è, esegui un alert e poi mostra la somma totale dei numeri con la conseguente differenza
                alert("La somma dei numeri ha raggiunto o superato " + max);
                document.getElementById("result").innerHTML = "Total Sum: " + sum;
                document.getElementById("difference").innerHTML = "Max: " + max + ", Difference: " + (sum - max);
            } else {
                // Altrimenti, mostra la somma
                document.getElementById("result").innerHTML = "Total Sum: " + sum;
            }
        } else {
            // L'input non è un valido
            alert("Inserisci un numero valido.");
        }
    }
}

// Ripeti la funzione al click
document.getElementById("repeat").addEventListener("click", repeat);

// Avvia automaticamente quando la pagina si carica
repeat();
