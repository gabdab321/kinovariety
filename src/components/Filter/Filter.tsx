import React, {Dispatch, useState} from 'react';
import Slider from "../UI/Slider/Slider";
import {countries} from "../../mock/countries";
import cl from "./Filter.module.scss"
import {IFilter} from "../../models/IFilter";
import {defaultFilter} from "../../mock/defaultFilter";
import {genres} from "../../mock/genres";
import Select from "../UI/Select/Select";

interface FilterProps {
    filter: IFilter
    setFilter: Dispatch<IFilter>
}

const defaultOption = {value: "", label: "Усі"}

//todo: add rating filter

const Filter = ({filter: currentFilter, setFilter: dispatch}: FilterProps) => {
    const [visible, setVisible] = useState<boolean>(false)

    const [filter, setFilter] = useState<IFilter>(defaultFilter)

    function toggleVisibility(): void {
        setVisible(!visible)
    }

    function handleChangeYears(value: number[]): void{
        setFilter({...filter, yearFrom: value[0], yearTo: value[1]})
    }

    function handleChangeRating(value: number[]): void{
        setFilter({...filter, ratingFrom: value[0], ratingTo: value[1]})
    }

    function dispatchFilter() {
        dispatch({...filter, page: currentFilter.page})
    }

    return (
        <>
            <button
                style={{marginBottom: "16px"}}
                onClick={toggleVisibility}
                className={cl.filter__button}
            >{visible ? "Сховати фільтр" : "Показати фільтр"}</button>


            <div style={{display: visible ? "" : "none"}} className={cl.filter}>

                <div className={cl.filter__select_container}>
                    <p className={cl.filter__label}>Країна виробник:</p>
                    <Select options={countries} defaultOption={defaultOption} />

                    <p className={cl.filter__label}>Жанри:</p>
                    <Select options={genres} defaultOption={defaultOption} />

                </div>

                <p className={cl.filter__slider_label}>Роки: </p>
                <Slider onChange={handleChangeYears} value={[filter.yearFrom, filter.yearTo]} min={1950} max={new Date().getFullYear()}/>

                <p style={{marginTop: "30px"}} className={cl.filter__slider_label}>Рейтинг: </p>
                <Slider onChange={handleChangeRating} value={[filter.ratingFrom, filter.ratingTo]} min={0} max={10}/>

                <button onClick={dispatchFilter} style={{marginTop: "50px"}} className={cl.filter__button}>Застосувати</button>
            </div>
        </>
    );
};

export default Filter;