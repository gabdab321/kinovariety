/*
    Simple function that transforms specific arrays to string iterated by ", ".
    Specific array means array with objects that has only one key and its same for all object.
    For example [{country: "France"}, {country: "Germany"}] will become "France, Germany",
    arguments here are arr, itemName = "country"
*/

export const transformArrayToStr = (arr: any, itemName: string):string => {
    return arr.map((item: any) => item[itemName]).join(", ")
}