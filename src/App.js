import React, {Component} from 'react';
import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Weather from "./components/Weather";
import './App.css';

const API_KEY = "AIzaSyBRxeLwZbCtK7OX45szIqaV_JY_pErMdrQ";

class App extends Component {
    getLocation = async(e) => {
        e.preventDefault();
        let pinCode = document.getElementById("pincode");
        const apiCall = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${pinCode}&key=${API_KEY}`);
        const data = await apiCall.json();
        console.log(data);
    };

    render() {
        return (
            <div>
                <Titles/>
                <Forms getLocation={this.getLocation}/>
                <Weather/>
            </div>
        );
    }
}

export default App;
