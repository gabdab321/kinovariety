import React from 'react';
import FilmPlayer from "../components/FilmPlayer/FilmPlayer";
import {useParams} from "react-router-dom";

const Player = () => {
    const {id} = useParams()

    return (
        <div>
            {id === undefined ? "" : <FilmPlayer id={id} />}
        </div>
    );
};

export default Player;