import React from 'react';
import './RadioButton.css';

function RadioButton(props) {
  const {label, name, checked, onChange } = props
  return (
    <div>
      <label>
        <input
          type="radio"
          name={name}
          checked={checked}
          onChange={onChange}
          />
        {label}
      </label>
    </div>
  )
}

export default RadioButton