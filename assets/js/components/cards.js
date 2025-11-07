import { catalogue } from "../library/catalogue.js";
const cars = document.getElementById("cars");
let result = document.getElementById("result");

catalogue.forEach((car) => {
  result.textContent = `${catalogue.length} résultats`;
  const card = document.createElement("div");
  card.classList.add("card");
  let index = 0;
  card.innerHTML = `
        <div>
            <i class="fa-solid fa-caret-left"></i>
            <img src="./assets/img/${car.cover[index]}" alt="${car.modele}" />
            <i class="fa-solid fa-caret-right"></i>
        </div>
        <div>
            <h2>${car.modele}</h2>
            <p>${car.carburant}</p>
            <p>${car.prix}€</p>
            <button type="button">Réserver et Payer</button>
        </div>
    `;
  cars.append(card);

  const img = card.querySelector("img");
  const previous = card.querySelector(".fa-caret-left");
  const next = card.querySelector(".fa-caret-right");

  next.addEventListener("click", () => {
      index = (index + 1) % car.cover.length;
      img.src = `./assets/img/${car.cover[index]}`;
    });
    previous.addEventListener("click", () => {
      index = (index - 1 + car.cover.length) % car.cover.length;
      img.src = `./assets/img/${car.cover[index]}`;
    });
});

export { cars };
