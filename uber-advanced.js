// INPUT:
// - gereden afstand [variabele]
// - gekozen service [variabele]

// OUTPUT:
// - De totale ritprijs afhankelijk van de gekozen service

// Stappenplan:
// 1. Varaibele declareren voor de gereden afstand
// 2. De gekozen service-variabele declareren [ UberX, UberBlack, UberVan ]
// 3. Zoek de juiste km prijs bij het gekozen servicetype
// 4. Vermenigvuldigen van de ritprijs met de gereden km's
// 5. Log het totaal in de terminal

const distance = 65;
const chosenService = "UberVan"

let totalPrice = 0;

if (chosenService === "UberX") {
    // Prijs = €3,-
    totalPrice = 3 * distance;
} else if ( chosenService === "UberBlack" ) {
    // Prijs = €8,-
    totalPrice = 8 * distance;
} else if (chosenService === "UberVan") {
    // Prijs = €6,-
    totalPrice = 6 * distance;
} else {
    // loggen wanneer het mis gaat
    totalPrice = "Er is iets mis gegaan. Probeer het opnieuw"
}

console.log(totalPrice);