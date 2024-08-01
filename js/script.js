/*
1. Recuperare l'elemento dal DOM
2. Recuperare la distanza (in km) che l'utente vuole percorrere tramite prompt e salvare il dato in una variabile
3. Recuperare l'età dell'utente tramite prompt e salvare il dato in una variabile
4. Calcolare il prezzo del biglietto
5. Applicare al prezzo del biglietto uno sconto del 20% se l'utente ha meno di 18 anni
6. Applicare al prezzo del biglietto uno sconto del 40% se l'utente ha più di 65 anni
7. Stampare i dati e il prezzo del biglietto
*/

// Fase di preparazione

// Recupero l'elemento dal DOM
const ticketElement = document.getElementById("ticket");
console.log(ticketElement);

// Fase di raccolta dati

// Recupero la distanza (in km) che l'utente vuole percorrerre tramite prompt e salvo il dato in una variabile
const distance = parseInt(prompt("Distanza(in km):", 50));
console.log("distance =", distance, "type:", typeof distance);

// Recupero l'età dell'utente tramite prompt e salvo il dato in una variabile
const age = parseInt(prompt("Età:", 25));
console.log("age =", age, "type:", typeof age);

// Fase di elaborazione e produzione

// Calcolo il prezzo del biglietto
const ticketPrice = (distance * 0.21);
console.log("ticketPrice =", ticketPrice, "type:", typeof ticketPrice);

// Controllo l'età per stabilire il prezzo del biglietto (con o senza sconto)
// Stampo i dati e il prezzo del biglietto
if (age < 18) {
    const discount20 = (ticketPrice - ((ticketPrice * 20) / 100)).toFixed(2);
    ticketElement.innerText = `Distanza: ${distance} km
                               Età: ${age} anni
                               Prezzo biglietto: ${discount20} € (sconto del 20%)`;
} else if (age > 65) {
    const discount40 = (ticketPrice - ((ticketPrice * 40) / 100)).toFixed(2);
    ticketElement.innerText = `Distanza: ${distance} km
                               Età: ${age} anni
                               Prezzo biglietto: ${discount40} € (sconto del 40%)`;
} else {
    ticketPrice.toFixed(2);
    ticketElement.innerText = `Distanza: ${distance} km
                               Età: ${age} anni
                               Prezzo biglietto: ${ticketPrice} €`;
};