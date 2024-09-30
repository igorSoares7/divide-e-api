const {somarNumeros} = require('.');

test("Soma dois números", () => {
    expect(somarNumeros(1,1)).toBe(2)
})