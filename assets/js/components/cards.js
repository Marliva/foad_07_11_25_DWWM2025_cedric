import { catalogue } from "../library/catalogue.js";
const cars = document.getElementById("cars");
let result = document.getElementById("result");

catalogue.forEach((car) => {
  result.textContent = `${catalogue.length} résultats`;
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
        <div>
            <i class="fa-solid fa-caret-left"></i>
            <img src="./assets/img/${car.cover}" alt="${car.modele}" />
            <i class="fa-solid fa-caret-right"></i>
        </div>
        <div>
            <h2>${car.modele}</h2>
            <p>${car.carburant}</p>
            <p>${car.prix}€</p>
            <button type="button">Réserver et Payer</button>
        </div>
    `;
  cars.appendChild(card);
});

export { cars };
