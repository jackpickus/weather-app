import React from 'react';
import { Day } from './components/Day';


class WeatherList extends React.Component {

    // function getWeather() {
    //  TODO
    // }

    render() {
        const { days } = this.props;
        return(
            <div>
                <h1> Welcome to My Weather App </h1>
                <p> Search any city to find its 5 day forecast </p>
                <form>
                    <input
                        //onSubmit={getWeather()}
                        type="text"
                        name="city"
                        placeholder="City..." />
                        <button>Get Weather</button>
                </form>

                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Current Temp</th>
                      <th scope="col">Max Temp</th>
                      <th scope="col">Min Temp</th>
                      <th scope="col">Condition</th>
                    </tr>
                  </thead>
                  {days.map(
                      (day, i) =>
                          <Day
                              key={i}
                              date={day.date}
                              currTemp={day.currTemp}
                              maxTemp={day.maxTemp}
                              minTemp={day.minTemp}
                              condition={day.condition} />
                  )}
                </table>
            </div>
        );
    }
}

export default WeatherList;
