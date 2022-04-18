import React from "react";
import "./DisplayWeather.css"

function DisplayWeather(props) {
  const { temp, feelsLike, description, name } = props
  return (
    <div>
      <h3>In {name} it's:</h3>
      <h1>{temp}</h1>
      <small>Today FEELS like: {feelsLike}</small>
      <p>Today's {description}</p>

    </div>
  )
}

export default DisplayWeather