import React from 'react';
import {Routes, Route} from "react-router-dom";
import {routes} from "./routes";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => <Route key={route.path} {...route} />)}
        </Routes>
    );
};

export default AppRouter;