import React from 'react';
import {Routes, Route} from "react-router-dom";
import {routes} from "../routes/routes";

/*
     This component is used to map and render array of app routes. It takes routes array from "routes.tsx" file
*/

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => <Route key={route.path} {...route} />)}
        </Routes>
    );
};

export default AppRouter;