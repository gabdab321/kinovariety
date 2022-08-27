import React from 'react';
import Navbar from "./components/UI/Navbar/Navbar";
import "./styles/App.scss"
import AppRouter from "./routes/AppRouter";

function App() {

    return (
        <div className="App">
            <Navbar />
            <AppRouter />
        </div>
    );
}

export default App;
