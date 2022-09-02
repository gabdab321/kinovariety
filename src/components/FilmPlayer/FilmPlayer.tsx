import React, {useEffect} from 'react';
import cl from "./FilmPlayer.module.scss"

interface FilmPlayerProps {
    id: string | number
}

const FilmPlayer = ({id}: FilmPlayerProps) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = `${process.env.PUBLIC_URL}/player.js`;
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [id]);

    return (
        <div className={cl.player_container}>
            <div className={cl.player} id="kinobd" data-resize="1" data-bg="#000" data-kinopoisk={id}/>
        </div>
    );
};

export default FilmPlayer;