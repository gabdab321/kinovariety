import React, {useState} from 'react';
import ReactSlider from "react-slider";
import cl from "./Slider.module.scss"

interface SliderProps {
    max: number,
    min: number,
    defaultValue?: number[],
}

const Slider = ({max, min, defaultValue}: SliderProps) => {
    const [currentValue, setCurrentValue] = useState(0);

    return (
        <ReactSlider
            className={cl.customSlider}
            thumbClassName={cl["customSlider-thumb"]}
            trackClassName={cl["customSlider-track"]}
            markClassName={cl["customSlider-mark"]}
            defaultValue={defaultValue || [min, max]}
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