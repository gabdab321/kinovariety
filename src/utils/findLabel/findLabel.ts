export interface Option {
    label: string,
    value: string | number,
}

/**
 *  Finds and returns the label of the selected option from a list of options, given the selected value.
 *  If a default option is provided, it will be included in the search.
 *  Takes arguments options, selectedValue, defaultOption? .
 *  @param options - The list of options to search through.
 *  @param selectedValue The value of the selected option
 *  @param defaultOption - The default option to include in the search (optional)
 *  @returns The label of the selected option, or an empty string if no option matches the selected value
 */

export function findLabel(options: Option[], selectedValue: string | number, defaultOption: Option | null = null): string {
    // Initializes a variable to store the selected option
    let selectedOption;

    /*
     If a default option is provided, includes it in the search by creating a new array
     with the default option followed by the original options array, and then finds the
     selected option based on its value.
     */
    if(defaultOption) {
        selectedOption = [defaultOption, ...options].find(item => item.value === selectedValue);
    } else {
        // Finds the selected option based on its value in the original options array
        selectedOption = options.find(item => item.value === selectedValue)
    }

    /*
     If a selected option was found, returns its label. Otherwise, returns an empty string.
     The ternary operator is used to achieve this in one line of code.
    */
    return selectedOption ? selectedOption.label : "";
}