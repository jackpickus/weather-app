import React from 'react';
import { Day } from './components/Day';

const Temp = props => {
    return(
        <div>
            <p>The current weather is: {props.condition}</p>
            <p>The current temperature is: {props.temp}&#8457;</p>
            <p>The max temp is: {props.max_temp}&#8457;</p>
            <p>The min temp is: {props.min_temp}&#8457;</p>
        </div>

    );
}

class WeatherList extends React.Component {

    state = {
        city: '',
        temp: '',
        max_temp: '',
        min_temp: '',
        condition: '',
        data: []
    }

    newCity = e =>
        this.setState({ city: e.target.value })

    submit = async e => {
        e.preventDefault();
        console.log(`City chosen: ${this.state.city}`);

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=4fcb479d435f4e2b224f7acef760cdb8&units=imperial`);

        const weather = await api_call.json();

        if (this.city !== '') {
            this.setState({data: weather.main});
            this.setState({temp: weather.main.temp});
            this.setState({max_temp: this.state.data.temp_max});
            this.setState({min_temp: weather.main.temp_min});
            this.setState({condition: weather.weather[0].description})
        } else {
            console.log("Failed to set state");
        }
    }

    render() {
        const { days } = this.props;
        return(
            <div>
                <h1> Welcome to My Weather App </h1>
                <p> Search any city to find its current weather</p>
                <form onSubmit={this.submit}>
                    <input
                        type="text"
                        name="city"
                        placeholder="City..."
                        onChange={this.newCity}/>
                        <button>Get Weather</button>
                </form>

                {(this.state.temp !== "") ?
                    <Temp
                        temp={this.state.temp}
                        max_temp={this.state.max_temp}
                        min_temp={this.state.min_temp}
                        condition={this.state.condition} />
                    : <p></p>
                }

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
