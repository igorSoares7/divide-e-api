function execute(){
   const valorResultado = document.getElementById('resultadoSoma');
   const numeroUm = document.getElementById('formUm').value;
   const numeroDois = document.getElementById('formDois').value;
   const primeiroValor = Number(numeroUm);
   const segundoValor = Number(numeroDois);
   const operacao = somarNumeros(primeiroValor, segundoValor)

   valorResultado.innerHTML = operacao;
   
}

function somarNumeros(primeiroValor, segundoValor){
   return primeiroValor + segundoValor;
}




async function buscarPokemon(){
   const valueInput = document.getElementById('formPoke').value;

   const pokemon = await buscarAPI(valueInput);

   const nomePoke = document.getElementById('nomePoke');
   const imgPoke = document.getElementById('imgPoke');

   nomePoke.innerHTML = `Nome: ${pokemon.name}`
   imgPoke.src = pokemon.sprites.front_default
}

async function buscarAPI(valueInput){
   const url = `https://pokeapi.co/api/v2/pokemon/${valueInput}/`

   const response = await fetch(url)
   return response.json()


}

module.exports = {
   somarNumeros
}