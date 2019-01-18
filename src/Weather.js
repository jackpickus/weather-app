import React from 'react';
import { Day } from './components/Day';


class WeatherList extends React.Component {

    state = {
        city: '',
        data: []
    }

    newCity = e =>
        this.setState({ city: e.target.value })

    submit = async e => {
        e.preventDefault();
        console.log(`City chosen: ${this.state.city}`);

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=4fcb479d435f4e2b224f7acef760cdb8&units=imperial`);

        const weather = await api_call.json();

        if (this.city !== null) {
            this.setState({data: weather.main});
        } else {
            console.log("Failed to set state");
        }
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
