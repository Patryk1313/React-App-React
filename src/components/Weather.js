import React from "react";

const Weather = props => {

    const {icon, city, loc, temp, desc, feels_like, wind, pressure} = props.weather;

    return (
        <section className="weather">

            <div className="weather-icon flex">
                <img src={"./icon/" + icon + ".png"} />
            </div>

            <div className="weather-info grid-1">

                <div className="weather-info--location  flex text-center">
                    <p>⁣{city} {loc}</p>
                </div>

                <div className="weather-info--temperature text-center">
                    <h1>{temp}⁣</h1>
                </div>

                <div className="weather-info--description text-center">
                    <p>{desc}</p>
                </div>

                <div className="weather-info--mainInfo flex grid-3 text-center">
                    <div>
                        <h4>Temperatura odczuwalna</h4>
                        <p className="temp-fell">{feels_like}⁣</p>
                    </div>
                    <div>
                        <h4>Siła wiatru</h4>
                        <p className="wind">{wind}</p>
                    </div>
                    <div>
                        <h4>Ciśnienie </h4>
                        <p className="pressure">{pressure}</p>
                    </div>
                </div>

            </div>
    </section>
    )
}

export default Weather;