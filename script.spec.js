const {divideNumeros} = require('./moduloCalculadora');

test("Divide dois números", () => {
    expect(divideNumeros(10,2)).toBe(2)
    expect(divideNumeros(15,3)).toBe(3)
})