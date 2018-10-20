import React, {Component} from 'react';
import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Weather from "./components/Weather";
import './App.css';

const API_KEY = "";

class App extends Component {
    render() {
        return (
            <div>
                <Titles/>
                <Forms/>
                <Weather/>
            </div>
        );
    }
}

export default App;
