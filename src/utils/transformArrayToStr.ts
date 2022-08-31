export const transformArrayToStr = (itemName: string, arr: any):string => {
    // @ts-ignore
    return arr.map(item => item[itemName]).join(", ")
}

// export {transformArrayToStr}