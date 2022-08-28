import React from 'react';
import cl from "./ErrorWarning.module.scss"

interface ErrorWarningProps {
    message?: string
}

const ErrorWarning = ({message}: ErrorWarningProps) => {
    return (
        <div className={cl.warning}>
            Виникла помилка {message && message}
        </div>
    );
};

export default ErrorWarning;