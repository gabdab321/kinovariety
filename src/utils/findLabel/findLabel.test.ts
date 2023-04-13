import { findLabel, Option } from './findLabel';

describe('findLabel', () => {
    const options: Option[] = [
        { label: 'Option 1', value: 'option-1' },
        { label: 'Option 2', value: 'option-2' },
        { label: 'Option 3', value: 'option-3' },
    ];

    it('returns the label of the selected option', () => {
        const selectedValue = 'option-2';
        const expectedLabel = 'Option 2';
        expect(findLabel(options, selectedValue)).toEqual(expectedLabel);
    });

    it('returns an empty string if no option matches the selected value', () => {
        const selectedValue = 'option-4';
        expect(findLabel(options, selectedValue)).toEqual('');
    });

    it('includes the default option in the search if provided', () => {
        const selectedValue = 'option-4';
        const defaultOption = { label: 'Option 4', value: 'option-4' };
        const expectedLabel = 'Option 4';
        expect(findLabel(options, selectedValue, defaultOption)).toEqual(expectedLabel);
    });

    it('returns the label of the selected option if it matches the default option value', () => {
        const selectedValue = 'option-1';
        const defaultOption = { label: 'Option 1', value: 'option-1' };
        const expectedLabel = 'Option 1';
        expect(findLabel(options, selectedValue, defaultOption)).toEqual(expectedLabel);
    });
});