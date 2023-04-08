/*
    Formats age limit string. Function takes only digits from string and transform it.
    For example "age16" will become "16+"
*/

export function formatAgeLimit(unFormattedStr: string): string {
    if(unFormattedStr === "") return "-"

    let matches = unFormattedStr.match(/\d+/g) as Array<string>

    return matches[0] + "+"
}