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
          <div>

            {/* associate the label with the radio button by calling it with the "id"  */}
            <input
              id="metric"
              type="radio"
              name="unit"
              checked={unit === 'metric'}
              onChange={(e) => {setUnit('metric')}}
              />
              {/* for is a reserved word in JS so we need to use htmlFor */}
              <label htmlFor="metric">metric</label>

            <label>
              <input
                type="radio"
                name="unit"
                checked={unit === 'imperial'}
                onChange={(e) => {setUnit('imperial')}}

                />
            imperial</label>
      
            <label>
              <input
                type="radio"
                name="unit"
                checked={unit === 'standard'}
                onChange={(e) => {setUnit('standard')}}

                />
            standard</label>


          </div>


        </div>
      </form>
    </div>
  )
}

export default Weather