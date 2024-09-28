function somarNumeros(){
   const numero = document.getElementById('resultadoSoma');
   const numeroUm = document.getElementById('formUm').value;
   const numeroDois = document.getElementById('formDois').value;
   const operacao = Number(numeroUm) + Number(numeroDois);
   numero.innerHTML = operacao;
   
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