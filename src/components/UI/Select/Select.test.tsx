import Select from "./Select";
import {render, screen, fireEvent} from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'

describe('Select', () => {
    const options = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ];

    const onChange = (value: string) => {
        console.log(value)
    }

    test('renders without crashing', () => {
        render(<Select onChange={onChange} options={options} />);
    });

    test("renders all options", () => {
        render(<Select onChange={onChange} options={options}/>)
        const button = screen.getByTestId("button")
        fireEvent.click(button)

        const option1 = screen.getByText("Option 1")
        const option2 = screen.getByText("Option 2")
        const option3 = screen.getByText("Option 3")

        expect(option1).toBeInTheDocument()
        expect(option2).toBeInTheDocument()
        expect(option3).toBeInTheDocument()
    })

    test("renders default option", () => {
        render(<Select onChange={onChange} options={options} defaultOption={{value: "4", label: "Default option"}}/>)
        const button = screen.getByTestId("button")
        fireEvent.click(button)

        const defaultOption = screen.getAllByText("Default option")[1]

        expect(defaultOption).toBeInTheDocument()
    })

    test("properly selects option", () => {
        render(<Select onChange={onChange} options={options} />)
        const button = screen.getByTestId("button")
        fireEvent.click(button)

        fireEvent.click(screen.getByText("Option 3"))

        const selectedOption = screen.getAllByText("Option 3")[0]

        expect(selectedOption).toBeInTheDocument()
    })

    test("closes on blur", () => {
        render(<Select onChange={onChange} options={options} />)
        const button = screen.getByTestId("button")
        fireEvent.click(button)

        fireEvent.blur(screen.getByRole("list"))
        setTimeout(() => expect(screen.queryByRole("list")).not.toBeInTheDocument(),350)
    })
});