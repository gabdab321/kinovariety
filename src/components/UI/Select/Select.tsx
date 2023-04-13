import React, {useEffect, useRef, useState} from 'react';
import styles from './Select.module.scss';
import {findLabel} from "../../../utils/findLabel/findLabel";

interface Option {
    label: string;
    value: string | number;
}

interface Props {
    options: Option[];
    defaultOption?: Option
}

function CustomSelect({ options, defaultOption }: Props) {
    const [selectedValue, setSelectedValue] = useState<string | number>(defaultOption ? defaultOption.value : "");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
    const searchInputRef = useRef<HTMLInputElement>(null);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    function handleClick(value: string | number): void {
        setSelectedValue(value)
        toggleDropdown()
    }

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const searchText = event.target.value.toLowerCase();
        const filtered = options.filter(option =>  option.label.toLowerCase().includes(searchText));
        setFilteredOptions(filtered);
    }

    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }

        if(!isOpen) {
            setFilteredOptions(options)
        }
    }, [isOpen]);

    return (
        <div className={styles['custom-select']}>
            <div className={styles['select-box']} onClick={toggleDropdown}>
                <div className={styles['selected-value']}>{findLabel(options, selectedValue, defaultOption)}</div>
                <div className={styles['dropdown-arrow']}>{isOpen ? '▲' : '▼'}</div>
            </div>
            {isOpen && (
                <ul className={styles['dropdown-menu']}>
                    <div className={styles['search-box']}>
                        <input
                            type="text"
                            placeholder="Пошук..."
                            onChange={handleSearch}
                            ref={searchInputRef}
                        />
                    </div>
                    {defaultOption && <li onClick={() => handleClick(defaultOption.value)}>
                        {defaultOption?.label}
                    </li>}

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

export default CustomSelect;