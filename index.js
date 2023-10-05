const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const inputNumber = document.getElementById("inputNumber");
const pizzaContainer = document.querySelector(".showingPizza");

let maxNumber = 5; // Numero máximo a ingresar
let minNumber = 1; // Numero minimo a ingresar

// pizzaContainer.innerHTML = myStorage

const showPizza = (id) => {
  const isValid = id <= maxNumber && id >= minNumber;
  if (id === " ") {
    pizzaContainer.innerHTML = `<small class="errorText">Introduce un número válido</small>`;
  } else if (isValid) {
    const pizza = pizzas.find((pizza) => pizza.id === Number(id));

    let element = `
    <h1>${pizza.nombre}</h1>
    <img src="${pizza.imagen}" alt=${pizza.nombre}"/>
    <h2>$${pizza.precio}</h2>
    `;

    pizzaContainer.style.background = `linear-gradient(50deg, rgba(0,0,0,0.85), rgba(0,0,0,0.85)),url(${pizza.imagen})`;
    pizzaContainer.innerHTML = element;
    localStorage.setItem("lastPizza", JSON.stringify(pizza));
  } else {
    pizzaContainer.style.background = "none";
    pizzaContainer.innerHTML = `<small class="errorText">Introduce un número válido</small>`;
  }
};

const readNumber = () => {
  addEventListener("submit", (e) => {
    e.preventDefault();

    showPizza(inputNumber.value);
  });

  let victorio = document.querySelector(".with__love");

  victorio.addEventListener("click", () => {
    localStorage.removeItem("lastPizza");
    window.location.reload()
  });
};

// Funcion inicializadora, y verifica si ya hay una pizza en el storage
function init() {
  const myStorage = JSON.parse(localStorage.getItem("lastPizza")) || "";
  if (myStorage === "") {
    pizzaContainer.innerHTML =
      '<small class="errorText">Tenés que ingresar un numero</small>';
  }
  if (myStorage != "") {
    pizzaContainer.innerHTML = `
    <h1>${myStorage.nombre}</h1>
    <img src="${myStorage.imagen}" alt=${myStorage.nombre}"/>
    <h2>$${myStorage.precio}</h2>
    `;

    pizzaContainer.style.background = `linear-gradient(50deg, rgba(0,0,0,0.85), rgba(0,0,0,0.85)),url(${myStorage.imagen})`;
  }

  readNumber();
}

init();
