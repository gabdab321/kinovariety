import {IRoute} from "../models/IRoute";
import HomePage from "../pages/HomePage";
import {Navigate} from "react-router-dom";
import FilmPage from "../pages/FilmPage";
import FilmsPage from "../pages/FilmsPage";
import SeriesPage from "../pages/SeriesPage";

export const routes: IRoute[] = [
    {path: "/", element: <HomePage/>},
    {path: "/film/:id", element: <FilmPage/>},
    {path: "/films", element: <FilmsPage/>},
    {path: "/series", element: <SeriesPage/>},
    {path: "*", element: <Navigate to="/" replace/>},
]