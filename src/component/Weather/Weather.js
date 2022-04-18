import React from "react";
import "./Weather.css";
import { useState } from "react";

function Weather() {

  const [zip, setZip] = useState('94210')
  const [unit, setUnit] = useState('metric')

  return (
    <div className="Weather">
      <h1>{zip} {unit}</h1>
      <form>
        <div className="Weather-Align">
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
            <button>Submit</button>
          </div>
          <div>
            <select onChange={e => setUnit(e.target.value)}>
              <option value="metric">Celcius</option>
              <option value="imperial">Fahrenheit</option>
              <option value="standard">Kelvin</option>
            </select>
          </div>
          <div>
            <input
              id="metric"
              type="radio"
              />
              <label htmlFor="metric">metric</label>
          </div>


        </div>
      </form>
    </div>
  )
}

export default Weather