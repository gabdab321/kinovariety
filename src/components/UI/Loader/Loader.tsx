import React from 'react';
import cl from "./Loader.module.scss"

interface LoaderProps {
    style: Object
}


const Loader = ({style}: LoaderProps) => {
    return (
        <div style={style} className={cl.loader}>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
};

export default Loader;