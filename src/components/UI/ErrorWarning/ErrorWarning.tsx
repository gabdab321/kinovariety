import React from 'react';
import cl from "./ErrorWarning.module.scss"

interface ErrorWarningProps {
    message?: string
}

/**
 * UI component that renders error warning.
 * @param message {String} - Error message.
 * @returns JSX.Element - user`s error warning */

const ErrorWarning = ({message}: ErrorWarningProps) => {
    return (
        <div className={cl.warning}>
            Виникла помилка {message && message}
        </div>
    );
};

export default ErrorWarning;