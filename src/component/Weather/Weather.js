import React from "react";
import "./Weather.css";
import { useState } from "react";
import RadioButton from "../RadioButton/RadioButton";
import DisplayWeather from "../DisplayWeather/DisplayWeather";

function Weather() {

  const [zip, setZip] = useState('')
  const [unit, setUnit] = useState('metric')
  const [data, setData] = useState(null)

  async function fetchWeather() {
    const apikey = '4d5c2f4d98d24a0dee6f9f21f1a69cd6'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${unit}`
    // res is simply the response from the server, i.e. the server saying yes, got it, I'm responding
    const res = await fetch(path)
    // you made the connection to the server, and return the data as json - then we wait for the data
    const json = await res.json()
    console.log(json)
    // can't do any of the code below until we get a json, and we can't do that until we get a response from the server
    const cod = json.cod
    const message = json.message
    if (cod !== 200) {
      setData({cod, message})
      return
    }
    
    const temp = json.main.temp
    const feelsLike = json.main.feels_like
    const description = json.weather[0].description
    const name = json.name

    setData({
      cod,
      message,
      temp,
      feelsLike,
      description,
      name,
      unit
    })
  }

  
  return (
    <div className="Weather">
      {/* both sides of the && have to be true, otherwise it's false
      truthy is almost all the values. */}
      {/* {data && <DisplayWeather {... data} />} */}
      {/* {2+2 === 4? <p>2+2=4</p>: <p>2+3!=4</p> } */}
      {/* {2+3 === 4? <p>2+2=4</p>: <p>2+3!=4</p> } */}
      {/* {4 === 4? <p>2+2=4</p>: <p>2+3!=4</p> } */}
      { data ? <DisplayWeather {... data} />: <p>Enter Zip Code Below</p>}

      {/* as soon as you click submit, it reloads the pages, but we have to prevent that. */}
      <form onSubmit={(e) => {
        e.preventDefault()
        fetchWeather()
      }}>
        <div>
          <div>
            <input
              placeholder="Enter Zip Code"
              // by storing the value here, the value is separate from the input
              // this is a pattern we use with all form elements.
              value={zip}
              // by adding the onChange, every time I change the value, it'll update
              // so in the h1 above, the zip code changes as we type.
              onChange={(e) => {setZip(e.target.value)}}
              />
            <button type="submit">Submit</button>
          </div>
          <div className="Weather-Row">
            <div  className="Weather-Align">

              <RadioButton 
                label="metric"
                name="unit"
                checked={unit === 'metric'}
                onChange={() => setUnit('metric')}
                />
              <RadioButton 
                label="imperial"
                name="unit"
                checked={unit === 'imperial'}
                onChange={() => setUnit('imperial')}
                />
              <RadioButton 
                label="standard"
                name="unit"
                checked={unit === 'standard'}
                onChange={() => setUnit('standard')}
                />
            </div>
            <div>
              <select 
              // when you change the unit elsewhere(radio) it changes it here too
              value={unit}
              onChange={e => setUnit(e.target.value)}
              >
                <option value="metric">Celcius</option>
                <option value="imperial">Fahrenheit</option>
                <option value="standard">Kelvin</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Weather