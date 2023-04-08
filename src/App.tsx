import React from 'react';
import "./styles/App.scss"
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />

            <AppRouter />
        </div>
    );
}

export default App;