import { describe, expect, test } from "vitest";
import { divideNumeros } from "./moduloCalculadora";


describe("Teste uma divisão entre dois números", () => {
    test("Divide dois números", () => {
        expect(divideNumeros(10, 2)).toBe(5)
        expect(divideNumeros(15, 3)).toBe(5)
    })

})