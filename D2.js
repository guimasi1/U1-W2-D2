/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = 42;
const num2 = 23;

const biggerNumber = num1 > num2 ? num1 : num2;

console.log(biggerNumber);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numGiven = 2;
const isEqualTo5 = numGiven !== 5 ? "not equal" : "equal";
console.log(isEqualTo5);

// può anche essere scritto con if / else.

if (numGiven !== 5) {
  console.log("not equal");
} else {
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numberGiven = 15;
if (numberGiven % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num3 = 8;
const num4 = 12;
if (
  num3 === 8 ||
  num4 === 8 ||
  num3 + num4 === 8 ||
  num3 - num4 === 8 ||
  num4 - num3 === 8
) {
  console.log("uno dei due numeri è 8, o la somma/sottrazione fra loro è 8.");
} else {
  console.log(
    "nessuno dei due numeri è uguale a 8, né tantomeno la loro somma/sottrazione."
  );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const totalShoppingCart = 10;
let totalCost = 0;

if (totalShoppingCart > 50) {
  totalCost = totalShoppingCart;
  console.log(`Il costo totale è ${totalShoppingCart}`);
} else {
  totalCost = totalShoppingCart + 10;
  console.log(`Il costo totale è ${totalCost}`);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const blackFriday = true;

if (totalShoppingCart > 50 && blackFriday) {
  totalCost = (totalShoppingCart * 80) / 100;
  console.log(`Il costo totale è ${totalCost}`);
} else if (totalShoppingCart <= 50 && blackFriday) {
  totalCost = (totalShoppingCart * 80) / 100 + 10;
  console.log(`Il costo totale è ${totalCost}`);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const a = 10;
const b = 5;
const c = 9;

const numInOrder = [];

if (a <= b && a <= c) {
  numInOrder.push(a);
  if (b <= c) {
    numInOrder.push(b);
    numInOrder.push(c);
  } else {
    numInOrder.push(c);
    numInOrder.push(b);
  }
} else if (b <= a && b <= c) {
  numInOrder.push(b);
  if (a <= c) {
    numInOrder.push(a);
    numInOrder.push(c);
  } else {
    numInOrder.push(c);
    numInOrder.push(a);
  }
} else if (c <= a && c <= b) {
  numInOrder.push(c);
  if (a <= b) {
    numInOrder.push(a);
    numInOrder.push(b);
  } else {
    numInOrder.push(b);
    numInOrder.push(a);
  }
}
console.log(numInOrder);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const givenValue = 2;
if (typeof givenValue === "number") {
  console.log("Il valore inserito è un numero");
} else {
  console.log("Il valore inserito non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numberToTest = 2;

if (numberToTest % 2 === 0) {
  console.log("Il numero inserito è pari");
} else {
  console.log("Il numero inserito è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 2;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//me.skills.splice(2); ---> si può usare anche splice
me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const array = [];
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);

console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

array.pop();
array.push(100);
console.log(array);
