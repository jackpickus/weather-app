import React from 'react';
import { Day } from './components/Day';

class WeatherList extends React.Component {

    state = {
        city: '',
        day1: [],
        day2: [],
        day3: [],
        day4: [],
        day5: [],
        good: false
    }

    newCity = e =>
        this.setState({ city: e.target.value })

    submit = async e => {
        e.preventDefault();
        console.log(`City chosen: ${this.state.city}`);

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=4fcb479d435f4e2b224f7acef760cdb8&units=imperial`);

        const weather = await api_call.json();


        if (weather.list !== undefined) {
            this.setState({day1: weather.list[0]});
            this.setState({day2: weather.list[8]});
            this.setState({day3: weather.list[16]});
            this.setState({day4: weather.list[24]});
            this.setState({day5: weather.list[32]});
            this.setState({good: true});
        } else {
            console.log("Failed to set state");
        }
    }

    render() {
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

                {(this.state.city !== "" && this.state.good === true) ?
                    <h1>Showing 5 day forecast for {this.state.city}</h1>
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
                        {this.state.good === false ?
														<tr></tr>
                            : <Day
                                date={this.state.day1.dt_txt}
                                currTemp={this.state.day1.main.temp}
                                maxTemp={this.state.day1.main.temp_max}
                                minTemp={this.state.day1.main.temp_min}
                                condition={this.state.day1.weather[0].main} />
                        }
                        {this.state.good === false ?
                            <tr></tr>
                            : <Day
                                date={this.state.day2.dt_txt}
                                currTemp={this.state.day2.main.temp}
                                maxTemp={this.state.day2.main.temp_max}
                                minTemp={this.state.day2.main.temp_min}
                                condition={this.state.day2.weather[0].main} />
                        }
                        {this.state.good === false ?
                            <tr></tr>
                            : <Day
                                date={this.state.day3.dt_txt}
                                currTemp={this.state.day3.main.temp}
                                maxTemp={this.state.day3.main.temp_max}
                                minTemp={this.state.day3.main.temp_min}
                                condition={this.state.day3.weather[0].main} />
                        }
                        {this.state.good === false ?
                            <tr></tr>
                            : <Day
                                date={this.state.day4.dt_txt}
                                currTemp={this.state.day4.main.temp}
                                maxTemp={this.state.day4.main.temp_max}
                                minTemp={this.state.day4.main.temp_min}
                                condition={this.state.day4.weather[0].main} />
                        }
                        {this.state.good === false ?
                            <tr></tr>
                            : <Day
                                date={this.state.day5.dt_txt}
                                currTemp={this.state.day5.main.temp}
                                maxTemp={this.state.day5.main.temp_max}
                                minTemp={this.state.day5.main.temp_min}
                                condition={this.state.day5.weather[0].main} />
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default WeatherList;
