export async function buscarAPI(valueInput) {
    const url = `https://pokeapi.co/api/v2/pokemon/${valueInput}/`
 
    const response = await fetch(url)
    return response.json()
 }

export function pegaElementoInteiro(elemento){
    const elementoInteiro = document.getElementById(elemento)
    return elementoInteiro
 }

export function buscaNomeNaAPI(API, nome){
    nome.innerHTML = `Nome: ${API.name}`
 }
 
export function buscaImgNaAPI(API, img){
    img.src = API.sprites.front_default
 }
 