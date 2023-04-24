import React, {useEffect} from 'react';
import cl from "./FilmPlayer.module.scss"

interface FilmPlayerProps {
    id: string | number
}

/**
 * The destination of this component is to render a film player with the provided id using an external script.
 * @param id - used for player to load film by id. films ids are from "kinopoisk" website
 * @returns JSX.Element - returns component that render film player */

const FilmPlayer = ({id}: FilmPlayerProps) => {
    /*
     dynamically create a script element and add it to the body of the document. The script's source is set to
     a player.js file located in the PUBLIC_URL environment variable. The script is marked as async to avoid blocking
     the rendering of the component.
    */
    useEffect(() => {
        /* HTML script node */
        const script = document.createElement('script');

        /* here we are defining script`s src and it`s asynchrony */
        script.src = `${process.env.PUBLIC_URL}/player.js`;
        script.async = true;

        /* adding script node into the body */
        document.body.appendChild(script);

        /* clean-up callback that removes player node from body */
        return () => {
            document.body.removeChild(script);
        }
    }, [id]);

    return (
        <div className={cl.player_container}>
            <div
                className={cl.player}
                style={{height: "200px"}}
                id="kinobd" data-resize="1"
                data-bg="#000"
                data-kinopoisk={id}
            />
        </div>
    );
};

export default FilmPlayer;