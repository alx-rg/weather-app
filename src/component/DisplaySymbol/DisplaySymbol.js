import React from 'react';

function DisplaySymbol(props) {

  const { unit } = props
return (
    <div>
 {
            unit === "metric" ? "°C"
            : unit === "imperial" ? "°F"
            : "°K"
          }
    </div>
  )
}

export default DisplaySymbol