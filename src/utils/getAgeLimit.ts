export function getAgeLimit(unFormattedStr: string): string {
    let matches = unFormattedStr.match(/\d+/g) as Array<string>

    return matches[0] + "+"
}