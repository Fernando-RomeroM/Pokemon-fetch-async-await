
// const objeto = {
//     años: 29,
//     ciudad: 'valencia',
//     coche: 'Volvo',
//     dirección: {
//         calle: 'Vara de rey',
//         piso: '4-6',
//         animales: ['perros', 'gatos', 'tortugas', 'hansters'],
//     }
// }

// console.log(objeto);


const containerDOM = document.getElementById('app')
const nextPokemon = document.getElementById('nextBtn')
const previousPokemon = document.getElementById('prevBtn')  


fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
    .then(response => response.json())
    .then(data => { 
              
      data.results.forEach(pokemon => {
            fetch(pokemon.url)
            .then(response => response.json())
            .then(pokemonDetails => {
                console.log(pokemonDetails.sprites.front_default)
                console.log(pokemonDetails.name)

                const pDOM = document.createElement('p')  
                pDOM.innerText = pokemonDetails.name 
                
                const imgDOM = document.createElement('img')
                imgDOM.src = pokemonDetails.sprites.front_default
            
                containerDOM.appendChild(pDOM)
                containerDOM.appendChild(imgDOM)                
            })
       });
    })

      nextPokemon.addEventListener("click", () => {
        console.log('Next');
      });

      previousPokemon.addEventListener("click", () => {
        console.log('Previous');
      })

const pDOM = document.createElement('p')
pDOM.innerText = 'Pokemon a tope' //tiene que ser antes



