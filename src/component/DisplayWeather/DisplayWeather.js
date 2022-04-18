import React from "react";
import "./DisplayWeather.css"
import DisplaySymbol from "../DisplaySymbol/DisplaySymbol";

function DisplayWeather(props) {
  const { temp, feelsLike, description, name, cod, message, unit } = props
  
  if (cod !== 200) {
    return (
      <div className="Error">
        <p>{message}</p>
      </div>
    )
  }
  
  return (
    <div className="DisplayWeather">
      <h3>In {name} it's:</h3>
      <h1> {temp} <DisplaySymbol  
                    unit = {unit}
                    />
      </h1>
      <p>FEELS like: {feelsLike} <DisplaySymbol  
                    unit = {unit}
                    /></p>
      <small>Todayiz {description}</small>

    </div>
  )
}

export default DisplayWeather