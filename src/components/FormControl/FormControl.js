import React from 'react';

import './FormControl.scss';

const FormControl = ({ control, onControlChange }) => {
  if (control.options.type === 'radio') {
    return (
      <div>
        <label className="d-inline-block mb16">{control.label}</label>
        {control.options.items.map((item) => {
          return (
            <React.Fragment key={item.value}>
              <input
                id={item.value}
                className="p-radio"
                type="radio"
                value={item.value}
                name={control.controlName}
                onChange={(e) =>
                  onControlChange(control.controlName, e.currentTarget.value)
                }
              />
              <label htmlFor={item.value} className="p-label">
                {item.label}
              </label>
            </React.Fragment>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={control.controlName} className="d-inline-block mb16">
        {control.label}
      </label>

      <input
        className="p-input"
        {...control.options}
        value={control.answer}
        onChange={(e) =>
          onControlChange(control.controlName, e.currentTarget.value)
        }
      />

      <ul className="mt8 ">
        {(control.errors ?? []).map((error, index) => (
          <li key={index} className="p-p--small tc-red-500">
            {error}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormControl;
