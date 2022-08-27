import {IRoute} from "../models/IRoute";
import HomePage from "../pages/HomePage/HomePage";
import {Navigate} from "react-router-dom";

export const routes: IRoute[] = [
    {path: "/", element: <HomePage/>},
    {path: "*", element: <Navigate to="/" replace/>},
]