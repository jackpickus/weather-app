import React from 'react';
import { Day } from './components/Day';

class WeatherList extends React.Component {

    render() {
        const { days } = this.props;
        return(
            <div>
                <h1> Welcome to My Weather App </h1>
                <p> Search any city to find its 5 day forecast </p>
                <form>
                    <input
                        type="text"
                        name="city"
                        placeholder="City..." />
                        <button>Get Weather</button>
                </form>
                {days.map(
                    (day, i) =>
                        <Day
                            key={i}
                            date={day.date}
                            currTemp={day.currTemp}
                            maxTemp={day.maxTemp}
                            minTemp={day.minTemp}/>
                )}
            </div>
        );
    }
}

export default WeatherList;
