import {transformArrayToStr} from "./transformArrayToStr";

describe("transformArrayToStr util", () => {
    test("properly transforms array", () => {
        const arr = [{country: "Франция"}, {country: "Германия"}]
        expect(transformArrayToStr(arr, "country")).toEqual("Франция, Германия")
    })
})