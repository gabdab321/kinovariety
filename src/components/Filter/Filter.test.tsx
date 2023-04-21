import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import Filter from './Filter';
import "@testing-library/jest-dom"
import ResizeObserver from "resize-observer-polyfill";

global.ResizeObserver = ResizeObserver

describe('Filter component', () => {
    let setFilterMock: jest.Mock<any, any>;
    beforeEach(() => {
        setFilterMock = jest.fn()
    })

    it('should render the button and hide the filter by default', () => {
        render(<Filter setFilter={setFilterMock} />)
        const button = screen.getByTestId("btn-toggle")
        const filter = screen.getByTestId("filter")

        expect(button).toBeInTheDocument()
        expect(filter).toBeInTheDocument()

        expect(filter).not.toBeVisible()
    });

    it('should toggle the filter visibility when clicking the button', () => {
        render(<Filter setFilter={setFilterMock} />)
        const button = screen.getByTestId("btn-toggle")
        const filter = screen.getByTestId("filter")

        expect(filter).not.toBeVisible()
        fireEvent.click(button)
        expect(filter).toBeVisible()
    });
});