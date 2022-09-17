import React from 'react';
import "./styles/App.scss"
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {
    console.log(process.env.API_TOKEN)

    return (
        <div className="App">
            <Navbar />

            <AppRouter />
        </div>
    );
}

export default App;