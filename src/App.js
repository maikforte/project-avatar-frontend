import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ScholarService } from './services/scholar-service/ScholarService';

function App() {
    test();

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <p>{process.env.REACT_APP_API_BASE_URL}</p>

                    Learn React
                </a>
            </header>
        </div>
    );
}

const test = async () => {
    await ScholarService.getScholar('0x32cd76234a94da27c7717def4fd8a672464f729d');
};

export default App;
