import React from 'react';
import "./styles/App.scss"
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {

    return (
        <div className="App">
            <Navbar />

            <AppRouter />
        </div>
    );
}

export default App;