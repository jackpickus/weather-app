import React from 'react';

import TiWeatherCloudy from 'react-icons/lib/ti/weather-cloudy';
import TiWeatherPartlyCloudy from 'react-icons/lib/ti/weather-partly-sunny';
import TiWeatherSunny from 'react-icons/lib/ti/weather-sunny';
import TiWeatherSnow from 'react-icons/lib/ti/weather-snow';
import TiWeatherShower from 'react-icons/lib/ti/weather-shower';
import TiWeatherStormy from 'react-icons/lib/ti/weather-stormy';
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
    } else
        return <GoQuestion />
}

export const Day = ({date, currTemp, maxTemp, minTemp, condition}) => {
    return (
        <div>
            <section>
                <h2>Date: {date} </h2>
                <p>The current temperature is: {currTemp}</p>
                <p>The max temperature is: {maxTemp}</p>
                <p>The min temperature is: {minTemp}</p>
                <p>Current condition: {condition} {IconPicker(condition)}</p>
            </section>
        </div>
    );
}
