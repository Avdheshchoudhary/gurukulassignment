// ReusableInput.js
import React from 'react';
import { useController } from 'react-hook-form';

const ReusableInput = ({ name, label, control, rules, ...rest }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: '',
  });

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        {...inputProps}
        id={name}
        name={name}
        ref={ref}
        {...rest}
      />
      {/* Display error message only if 'invalid' is true */}
      {invalid && <p style={{ color: 'red' }}>{error?.message}</p>}
    </div>
  );
};

export default ReusableInput;
