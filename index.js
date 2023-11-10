const form = document.getElementById('form');
const input = document.querySelector('.search-input');
const cardsContainer = document.querySelector('.cards-container')
const errorTag = form.querySelector('.error-text')
const callApi = async (pokemon) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    const dataOfPokemon = await response.json()
    return dataOfPokemon;
  } catch (e) {
    console.log(e)
  }
}

const mapPokemonTypes = (pokemon) => {
  return pokemon.types.map((type) => {
    return `<small>${type.type.name}</small>`
  }).join('')
}

const pokemonTemplate = (pokemon) => {
  const pokemonInfo = {
    name: pokemon.name,
    image: pokemon.sprites.other.home.front_default,
    types: mapPokemonTypes(pokemon),
    height: pokemon.height,
    weight: pokemon.weight
  }

  const {name, image, types, weight, height} = pokemonInfo;

  return (`
  <div class="pokemon-card">
  <img src="${image}"/>
  <h1>${name}</h1>
  <p>Pesa: ${weight / 10}Kg</p>
  <p>Mide: ${height / 10} Metros</p>
  <div class="pokemon-types">
  ${types}
  </div>
  `)
}

const renderPokemon = async (pokemon) => {
  cardsContainer.innerHTML = pokemonTemplate(pokemon)
}

const requestPokemon = async (event) => {
  event.preventDefault();
  if (input.value.trim() == '') {
    errorTag.textContent = 'Tenés que ingresar un número';
    return
  }
  const fetchedPokemon = await callApi(input.value);
  if(!fetchedPokemon){
    errorTag.textContent = 'Tu pokemón no se encontró'
    return
  } else {
    errorTag.textContent = ''
    renderPokemon(fetchedPokemon);
  }
} 

function init () {
  form.addEventListener('submit', requestPokemon); 
}

init()