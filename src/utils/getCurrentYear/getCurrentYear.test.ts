import {getCurrentYear} from "./getCurrentYear";

describe("getCurrentYear util", () => {
    test("returns current year", () => {
        expect(getCurrentYear()).toEqual(new Date().getFullYear())
    })
})