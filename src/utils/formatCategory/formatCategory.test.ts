import {formatCategory} from "./formatCategory";
import {Categories} from "../categories";

describe("formatCategory util", () => {
    test("properly formats film category", () => {
        expect(formatCategory(Categories.FILM)).toBe("фільм")
    })

    test("properly formats TV-Show category", () => {
        expect(formatCategory(Categories.TV_SHOW)).toBe("тв-шоу")
    })

    test("properly formats series category", () => {
        expect(formatCategory(Categories.TV_SERIES)).toBe("серіал")
    })
})