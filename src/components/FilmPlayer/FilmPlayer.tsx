import React, {useEffect} from 'react';

interface FilmPlayerProps {
    id: string | number
}

const FilmPlayer = ({id}: FilmPlayerProps) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "/player.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [id]);

    return (
        <div>
            <div id="kinobd" data-resize="1" data-bg="#000" data-kinopoisk={id}/>
        </div>
    );
};

export default FilmPlayer;