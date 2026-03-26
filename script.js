// ====================
// BESTIL KNAPPER
// ====================

// Her finder jeg alle knapper med klassen "bestil" i mit HTML
let knapper = document.querySelectorAll(".bestil");

// Her finder jeg den boks hvor beskeden skal vises
let besked = document.getElementById("besked");

// Jeg bruger forEach til at gå igennem ALLE knapper
knapper.forEach((knap) => {
  // Jeg lytter efter klik på hver knap
  knap.addEventListener("click", () => {
    // Her finder jeg navnet på drinken
    // parentElement = går op til selve drink-boksen
    // querySelector("h3") = finder overskriften (navnet)
    let navn = knap.parentElement.querySelector("h3").textContent;

    // Her laver jeg et tidspunkt med new Date()
    // toLocaleTimeString gør det læsbart (fx 14:32:10)
    let tid = new Date().toLocaleTimeString();

    // Her ændrer jeg indholdet i min besked-boks (DOM)
    // Så brugeren kan se hvad de har bestilt og hvornår
    besked.innerHTML = "Du bestilte: " + navn + " kl " + tid;
  });
});

// ====================
// SMAG (max 2)
// ====================

// Finder alle smage (span elementer)
let smage = document.querySelectorAll("#smag span");

// Array til at gemme de valgte smage
let valgteSmage = [];

// Loop gennem alle smage
smage.forEach((s) => {
  s.addEventListener("click", () => {
    // Henter teksten (navnet på smagen)
    let tekst = s.textContent;

    // Hvis smagen allerede er valgt → fjern den
    if (valgteSmage.includes(tekst)) {
      // filter fjerner den fra array
      valgteSmage = valgteSmage.filter((x) => x !== tekst);

      // fjerner markering
      s.classList.remove("valgt");
    } else {
      // Hvis der allerede er valgt 2 → stop
      if (valgteSmage.length >= 2) {
        alert("Max 2!");
        return; // stopper koden
      }

      // Tilføj smagen til array
      valgteSmage.push(tekst);

      // Giver den en klasse så den ændrer farve (UI state)
      s.classList.add("valgt");
    }
  });
});

// ====================
// TOPPINGS
// ====================

// Finder alle toppings
let tops = document.querySelectorAll("#top span");

// Array til toppings
let valgteTop = [];

// Loop gennem toppings
tops.forEach((t) => {
  t.addEventListener("click", () => {
    let tekst = t.textContent;

    // Hvis allerede valgt → fjern
    if (valgteTop.includes(tekst)) {
      valgteTop = valgteTop.filter((x) => x !== tekst);

      t.classList.remove("valgt");
    } else {
      // Tilføj topping
      valgteTop.push(tekst);

      t.classList.add("valgt");
    }
  });
});

// ====================
// BESTIL EGEN DRINK
// ====================

// Finder knappen
document.getElementById("bestilEgen").addEventListener("click", () => {
  // Hvis brugeren ikke har valgt nogen smag
  if (valgteSmage.length === 0) {
    alert("Vælg smag");
    return;
  }

  // Henter tidspunkt
  let tid = new Date().toLocaleTimeString();

  // join() laver array om til tekst
  besked.innerHTML =
    "Din drink: " +
    valgteSmage.join(" + ") +
    " med " +
    valgteTop.join(", ") +
    " kl " +
    tid;
});

// ====================
// ÅBNINGSTIDER
// ====================

// Henter nuværende time (0-23)
let time = new Date().getHours();

// Finder stedet i HTML hvor teksten skal vises
let tidTekst = document.getElementById("tid");

// Faste åbningstider
let åbner = 12;
let lukker = 20;

// If/else til at tjekke om butikken er åben
if (time >= åbner && time < lukker) {
  // Hvis ja vis åben
  tidTekst.innerHTML = "Åben nu (12 - 20)";
} else {
  // Hvis nej vis lukket
  tidTekst.innerHTML = "Lukket nu (12 - 20)";
}
