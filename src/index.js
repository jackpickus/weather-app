import React from 'react';
import {render} from 'react-dom';
import Weather from './Weather';

let weatherDays = [
    {"date": "1/14/18", "currTemp": 54, "maxTemp": 58, "minTemp": 50, "condition": "Clear"},
    {"date": "1/15/18", "currTemp": 43, "maxTemp": 49, "minTemp": 39, "condition": "Rain"},
    {"date": "1/16/18", "currTemp": 23, "maxTemp": 34, "minTemp": 19, "condition": "Clouds"},
    {"date": "1/17/18", "currTemp": 65, "maxTemp": 77, "minTemp": 60, "condition": "Mist"},
    {"date": "1/19/18", "currTemp": 32, "maxTemp": 39, "minTemp": 27, "condition": "Snow"},
    {"date": "1/19/18", "currTemp": 32, "maxTemp": 39, "minTemp": 27, "condition": "Pouring"}
];

render(
    <Weather days={weatherDays}/>,
    document.getElementById('root')
);
