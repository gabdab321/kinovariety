import React, {Dispatch, useState} from 'react';
import Slider from "../UI/Slider/Slider";
import {countries} from "../../mock/countries";
import cl from "./Filter.module.scss"
import {IFilter, Order} from "../../models/IFilter";
import {defaultFilter} from "../../mock/defaultFilter";
import {genres} from "../../mock/genres";
import Select from "../UI/Select/Select";
import {Option} from "../../utils/findLabel/findLabel";

interface FilterProps {
    setFilter: Dispatch<IFilter>
}

// default option for Select(country and genre) components
const defaultOption = {value: "", label: "Усі"}

/* default option for order Select */
const orderDefaultOption = {label: "Кількістю голосів", value: Order.NUM_VOTE}

/* options array for order Select */
const orderOptions: Option[] = [
    {label: "Рейтингом", value: Order.RATING},
    {label: "Роком", value: Order.YEAR}
]
/**
 * Filter component that allows the user to filter a list of movies based on different criteria such as country,
 * genre, year, and rating. The component consists of a button that toggles the visibility of the filter options,
 * and a form that includes select inputs for country, genre and order, and range sliders for year and rating.
 * @param {setFilter} - function to dispatch filter parameters.
 * @returns {JSX.Element} A React component that renders the filter.
 */

const Filter = ({setFilter}: FilterProps): JSX.Element => {
    /* responsible for visibility of the filter */
    const [visible, setVisible] = useState<boolean>(false)
    /* state for storing all of filter params and not making API request every time it changed */
    const [newFilter, setNewFilter] = useState<IFilter>(defaultFilter)

    /* toggles visibility of the filter */
    function toggleVisibility(): void {
        setVisible(!visible)
    }

    /* event handler for select component. sets country param to the newFilter object */
    function handleCountryChange(value: string): void {
        setNewFilter({...newFilter, country: value})
    }

    /* event handler for select component. sets genre param to the newFilter object */
    function handleGenreChange(value: string): void {
        setNewFilter({...newFilter, genre: value})
    }

    /* event handler for select component. sets order param to the newFilter object */
    function handleOrderChange(value: string): void {
        setNewFilter({...newFilter, order: value as Order})
    }

    /* event handler for slider component. sets yearsFrom and yearsTo params to the newFilter object */
    function handleChangeYears(value: number[]): void{
        setNewFilter({...newFilter, yearFrom: value[0], yearTo: value[1]})
    }

    /* event handler for slider component. sets ratingFrom and ratingTo params to the newFilter object */
    function handleChangeRating(value: number[]): void{
        setNewFilter({...newFilter, ratingFrom: value[0], ratingTo: value[1]})
    }

    /* dispatches newFilter to the parent component filter object */
    function applyChanges(): void {
        setFilter(newFilter)
    }

    return (
        <>
            {/* responsible for changing visibility of filter */}
            <button
                data-testid="btn-toggle"
                style={{marginBottom: "16px"}}
                onClick={toggleVisibility}
                className={cl.filter__button}
            >{visible ? "Сховати фільтр" : "Показати фільтр"}</button>

            {/* filter */}
            <div data-testid="filter" style={{display: visible ? "" : "none"}} className={cl.filter}>

                <div className={cl.filter__select_container}>
                    {/* select that responsible for changing country param */}
                    <p className={cl.filter__label}>Країна виробник:</p>
                    <Select data-testid="country" onChange={handleCountryChange} options={countries} defaultOption={defaultOption} />

                    {/* select that responsible for changing genre param */}
                    <p className={cl.filter__label}>Жанри:</p>
                    <Select data-testid="genre" onChange={handleGenreChange} options={genres} defaultOption={defaultOption} />
                </div>

                <p className={cl.filter__slider_label}>Роки: </p>
                {/* slider that responsible for changing yearFrom and yearTo params */}
                <Slider onChange={handleChangeYears} value={[newFilter.yearFrom, newFilter.yearTo]} min={1900} max={new Date().getFullYear()}/>

                <p style={{marginTop: "30px"}} className={cl.filter__slider_label}>Рейтинг: </p>
                {/* slider that responsible for changing ratingFrom and ratingTo params */}
                <Slider onChange={handleChangeRating} value={[newFilter.ratingFrom, newFilter.ratingTo]} min={0} max={10}/>

                <p style={{marginTop: "30px"}} className={cl.filter__slider_label}>Сортувати за: </p>
                {/* slider that responsible for changing order params */}
                <Select onChange={handleOrderChange} options={orderOptions} defaultOption={orderDefaultOption} />

                {/* this button is responsible for applying changes to the parent component */}
                <button data-testid="btn-apply" onClick={applyChanges} style={{marginTop: "50px"}} className={cl.filter__button}>Застосувати</button>
            </div>
        </>
    );
};

export default Filter;