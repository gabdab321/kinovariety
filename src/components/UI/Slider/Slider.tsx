import React from 'react';
import ReactSlider from "react-slider";
import cl from "./Slider.module.scss"

interface SliderProps {
    max: number
    min: number
    value: number[]
    onChange: (value: number[]) => void
}

/**
 * UI component that renders functional slider. Uses react-slider library component.
 * @param onChange - event handler that do something when slider`s value is changed.
 * @param max - maximal slider value.
 * @param min - minimal slider value.
 * @param value - an array of the numbers, that is used as value in the ReactSlider component.
 * @returns JSX.Element - Slider */


const Slider = ({max, min, value, onChange}: SliderProps) => {
    return (
        <ReactSlider
            onChange={onChange}
            className={cl.customSlider}
            thumbClassName={cl["customSlider-thumb"]}
            trackClassName={cl["customSlider-track"]}
            markClassName={cl["customSlider-mark"]}
            value={value}
            max={max}
            min={min}
            ariaLabel={['Lower thumb', 'Upper thumb']}
            ariaValuetext={state => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            pearling
            minDistance={1}
        />
    );
};

export default Slider;