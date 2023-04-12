import React, { useState } from 'react';
import styles from './Select.module.scss';

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

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    function handleClick(value: string | number): void {
        setSelectedValue(value)
        toggleDropdown()
    }

    function findLabel(): string {
        let selectedOption;

        if(defaultOption) {
            selectedOption = [defaultOption, ...options].find(item => item.value === selectedValue);
        } else {
            selectedOption = options.find(item => item.value === selectedValue)
        }

        return selectedOption ? selectedOption.label : "";
    }

    return (
        <div className={styles['custom-select']}>
            <div className={styles['select-box']} onClick={toggleDropdown}>
                <div className={styles['selected-value']}>{findLabel()}</div>
                <div className={styles['dropdown-arrow']}>{isOpen ? '▲' : '▼'}</div>
            </div>
            {isOpen && (
                <ul className={styles['dropdown-menu']}>
                    {defaultOption && <li onClick={() => handleClick(defaultOption.value)}>
                        {defaultOption?.label}
                    </li>}

                    {options.map((option) => (
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