import {formatAgeLimit} from "./formatAgeLimit";

describe("formatAgeLimit util", () => {
    test("formats string with only number", () => {
        expect(formatAgeLimit("12")).toBe("12+")
    })

    test("formats full line string", () => {
        expect(formatAgeLimit("For audiences over 18 years old only")).toBe("18+")
    })

    test("formats empty string", () => {
        expect(formatAgeLimit("")).toBe("-")
    })
})