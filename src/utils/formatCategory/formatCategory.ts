import {Categories} from "../categories";

/*
    Function that formats categories to human readable.
*/

export function formatCategory(category: string) {
    switch (category) {
        case Categories.FILM:
            return "фільм"

        case Categories.TV_SHOW:
            return "тв-шоу"

        case Categories.TV_SERIES:
            return "серіал"

        default:
            return ""
    }
}