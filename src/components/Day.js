import React from 'react';

export const Day = ({date, currTemp, maxTemp, minTemp}) => {
    return (
        <section>
            <h2>Date: {date} </h2>
            <p>The current temperature is: {currTemp}</p>
            <p>The max temperature is: {maxTemp}</p>
            <p>The min temperature is: {minTemp}</p>
        </section>
    );
}
