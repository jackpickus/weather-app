import React from 'react';
import { Day } from './components/Day';


class WeatherList extends React.Component {

    state = { city: ''}

    newCity = e =>
        this.setState({ city: e.target.value })

    submit = e => {
        console.log(`City chosen: ${this.state.city}`);
        e.preventDefault();
    }

    render() {
        const { days } = this.props;
        return(
            <div>
                <h1> Welcome to My Weather App </h1>
                <p> Search any city to find its 5 day forecast </p>
                <form onSubmit={this.submit}>
                    <input
                        type="text"
                        name="city"
                        placeholder="City..."
                        onChange={this.newCity}/>
                        <button>Get Weather</button>
                </form>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Current Temp</th>
                            <th scope="col">Max Temp</th>
                            <th scope="col">Min Temp</th>
                            <th scope="col">Condition</th>
                            </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
        );
    }
}

export default WeatherList;
