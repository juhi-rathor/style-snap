import React from 'react';

const FormField = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div className="mb-3 w-75">
      <label htmlFor={id} className="form-label form-input-label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="form-control input-field w-100"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FormField;
