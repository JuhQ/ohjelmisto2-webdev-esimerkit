const taulukko = [];

taulukko.splice(1, 2);

// funktioon liittyviä esimerkkejä

// ns. anonyymi funktio
const minunFunktio = function () {
  return "kissa kettu pöllö";
};

const arvo = minunFunktio();

console.log(arvo);

// ns. nimetyt funktiot
function hienoFunktio() {
  return parseInt(Math.random() * 101);
}

function loytyykoNollaTaiSata() {
  let i = 0;
  while (i < 1000) {
    const luku = hienoFunktio();
    if (luku === 0 || luku === 100) {
      console.log(luku + " löytyi");
    }

    i++;
  }
}

loytyykoNollaTaiSata();

// arrow function, tai fat arrow function

const hevospeli = () => "voitit pelin";

const hienoFunktio2 = () => {
  const satunnaisLuku = Math.random() * 101;
  return parseInt(satunnaisLuku);
};

const hienoFunktio3 = () => parseInt(Math.random() * 101);

console.log(hevospeli());
console.log(hienoFunktio());
console.log(hienoFunktio2());
console.log(hienoFunktio3());
