import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import TiWeatherCloudy from 'react-icons/lib/ti/weather-cloudy';
// import TiWeatherPartlyCloudy from 'react-icons/lib/ti/weather-partly-sunny';
import TiWeatherSunny from 'react-icons/lib/ti/weather-sunny';
import TiWeatherSnow from 'react-icons/lib/ti/weather-snow';
import TiWeatherShower from 'react-icons/lib/ti/weather-shower';
// import TiWeatherStormy from 'react-icons/lib/ti/weather-stormy';
import GoQuestion from 'react-icons/lib/go/question';

function IconPicker(condition) {
    if(condition === 'Clear') {
        return <TiWeatherSunny />
    } else if (condition === 'Rain' || condition === 'Mist') {
        return <TiWeatherShower />
    } else if (condition === 'Clouds') {
        return <TiWeatherCloudy />
    } else if (condition === 'Snow') {
        return <TiWeatherSnow />
    } else {
        return <GoQuestion />
    }
}

export const Day = ({date, currTemp, maxTemp, minTemp, condition}) => {
    return (
        <tr>
            <th scope="row">{date}</th>
            <td>{currTemp}</td>
            <td>{maxTemp}</td>
            <td>{minTemp}</td>
            <td>{condition} {IconPicker(condition)}</td>
        </tr>

    );
}
