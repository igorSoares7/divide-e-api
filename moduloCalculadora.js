export function iniciaEvento(element, event, callbackFunc){
    const botaoDividir = document.getElementById(element)
botaoDividir.addEventListener(event, callbackFunc)
}


export function pegaValorDoInput(input) {
    const valor = document.getElementById(input).value
    return valor
}

export function transformaNumber(valor){
    return Number(valor)
}

export function divideNumeros(primeiroValor, segundoValor) {
    if (primeiroValor === 0 || segundoValor === 0) {
        return "OPERAÇÃO INVÁLIDA"
    } else if (primeiroValor < 0 || segundoValor < 0) {
        return "OPERAÇÃO INVÁLIDA"
    } else {
        const result = primeiroValor / segundoValor;
        return result

    }

}
export function resultadoDivisao(valorResultado) {
    const elementResultado = document.getElementById('resultadoSoma');
    elementResultado.innerHTML = valorResultado

}

