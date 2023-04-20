import React, {useEffect, useRef, useState} from 'react';
import styles from './Select.module.scss';
import {findLabel} from "../../../utils/findLabel/findLabel";
import {Option} from "../../../utils/findLabel/findLabel";

export interface SelectProps {
    onChange:  (value: string) => void
    options: Option[];
    defaultOption?: Option
}

/**
 * UI select component that displays a dropdown menu with options to choose from.
 * @param onChange - Event handler that works on click to the option.
 * @param {Option[]} options - An array of options to choose from. Each option should have a value and label property.
 * @param {Option} [defaultOption] - An optional default option to be displayed when no option is selected.
 * @returns {JSX.Element} A React component that renders the custom select.
 */

function Select({ onChange, options, defaultOption }: SelectProps): JSX.Element {
    /* contains value of currently selected option */
    const [selectedValue, setSelectedValue] = useState<string>(defaultOption ? defaultOption.value : "");
    /* state that is responsible for dropdown menu visibility */
    const [isOpen, setIsOpen] = useState<boolean>(false);
    /* already filtered options. by default it is equal to options prop */
    const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
    /* ref on input element */
    const searchInputRef = useRef<HTMLInputElement>(null);

    /* Toggle visibility of the dropdown menu */
    function toggleDropdown(): void {
        setIsOpen(!isOpen);
    }

    /* Handle a click on an option. Sets selectedValue state */
    function handleClick(value: string): void {
        /* Invokes onChange handler function with value param */
        onChange(value)
        /* Changes selected option value in component */
        setSelectedValue(value)
    }

    /* Handle focus on the dropdown menu. Opens dropdown menu */
    function handleFocus(): void {
        setIsOpen(true)
    }

    /* Handle blur on the dropdown menu. Closes dropdown menu with a little timeout */
    function handleBlur(): void {
        /* Delays closing of dropdown menu, so onClick event handler can work correct */
        setTimeout(() => setIsOpen(false), 200)
    }

    /* Handle a change in the search input field */
    function handleSearch(event: React.ChangeEvent<HTMLInputElement>): void {
        /* Search text to filter options */
        const searchText = event.target.value.toLowerCase();
        /* Options filtered by searchText. Options are filtered by label param */
        const filtered = options.filter(option =>  option.label.toLowerCase().includes(searchText));

        setFilteredOptions(filtered);
    }

    useEffect(() => {
        /* Set focus on the search input field when the dropdown menu is opened */
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }

        /* Reset the filtered options when the dropdown menu is closed */
        if(!isOpen) {
            setFilteredOptions(options)
        }
    }, [isOpen]);

    return (
        <div className={styles['custom-select']}>

            <div data-testid="button" className={styles['select-box']} onClick={toggleDropdown}>
                <div className={styles['selected-value']}>{findLabel(options, selectedValue, defaultOption)}</div>
                <div className={styles['dropdown-arrow']}>{isOpen ? '▲' : '▼'}</div>
            </div>

            {/* renders dropdown menu if isOpen is equal to true */}
            {isOpen && (
                <ul className={styles['dropdown-menu']} tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
                    {/* this input is used to search through options */}
                    <input
                        className={styles['search-box']}
                        type="text"
                        placeholder="Пошук..."
                        onChange={handleSearch}
                        ref={searchInputRef}
                    />

                    {/* renders default option if it is provided in props */}
                    {defaultOption && <li onClick={() => handleClick(defaultOption.value)}>
                        {defaultOption?.label}
                    </li>}

                    {/* renders list of filtered options */}
                    {filteredOptions.map((option) => (
                        <li key={option.value} onClick={() => handleClick(option.value)}>
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Select;