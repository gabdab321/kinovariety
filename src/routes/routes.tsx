import {IRoute} from "../models/IRoute";
import HomePage from "../pages/HomePage";
import {Navigate} from "react-router-dom";
import FilmPage from "../pages/FilmPage";
import Player from "../pages/Player";

export const routes: IRoute[] = [
    {path: "/", element: <HomePage/>},
    {path: "/film/:id", element: <FilmPage/>},
    {path: "/player/:id", element: <Player />},
    {path: "*", element: <Navigate to="/" replace/>},
]