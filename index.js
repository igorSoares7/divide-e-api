import "./src/assets/scss/style.scss"
import { resultadoDivisao, divideNumeros, pegaValorDoInput, transformaNumber, iniciaEvento} from "./src/js/moduloCalculadora.js";
import { buscarAPI, pegaElementoInteiro, buscaNomeNaAPI, buscaImgNaAPI} from "./src/js/moduloBuscaPokemon.js";


iniciaEvento("botaoDividir", "click", execute)

function execute() {
   const InputUm = pegaValorDoInput('formUm')
   const InputDois = pegaValorDoInput('formDois')
   const primeiroValor = transformaNumber(InputUm)
   const segundoValor = transformaNumber(InputDois)
   const operacao = divideNumeros(primeiroValor, segundoValor)
   resultadoDivisao(operacao)
}


iniciaEvento("botaoPokemon", "click", buscarPokemon)
async function buscarPokemon() {
   const inputPokemon = pegaValorDoInput('formPoke')
   const pokemon = await buscarAPI(inputPokemon);
   const nomePoke = pegaElementoInteiro('nomePoke');
   const imgPoke = pegaElementoInteiro('imgPoke');
   buscaNomeNaAPI(pokemon, nomePoke)
   buscaImgNaAPI(pokemon, imgPoke)
}



