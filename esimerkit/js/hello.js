console.log("Kahvi on hyvää kun sitä juo");

document.querySelector("#target").innerHTML = "<h1>Hello world</h1>";

let nimi = "Juha";
const ika = 100;

// ei käytetä varria koska se on vanhentunut
var ammatti = "ope tai devaaja";

document.querySelector("#target").innerHTML = "Nimi: " + nimi + ", Ikä: " + ika;

nimi = "Petteri";
// ika = 5;
document.querySelector("#target").innerHTML = "Nimi: " + nimi + ", Ikä: " + ika;

console.log("ammatti", ammatti);

const tuplahipsut = "tässärivinvaihto";

const backtick = `tähän sisältöä


tänne voi laittaa rivinvaihtoja
`;

// const number = prompt("Anna kokonaisluku");
// if (number % 2 === 0) {
//   console.log("Annoit parillisen luvun.");
// } else {
//   console.log("Annoit parittoman luvun.");
// }

const cabinClass = prompt("Anna hyttiluokka (A/B/C).");
switch (cabinClass) {
  case "A":
    console.log("Yläkannen hytti, jossa on ikkuna.");
  // breakin puute johtaa jänniin tilanteisiin
  case "B":
    console.log("Yläkannen hytti ilman ikkunaa.");
    break;
  case "C":
    console.log("Ikkunaton hytti autokannen alapuolella.");
    break;
  default:
    console.log("Virheellinen hyttiluokka.");
}
