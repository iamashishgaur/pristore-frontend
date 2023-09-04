import React from "react";

const CustomInput = (props) => {
  const {
    type,
    label,
    name,
    placeholder,
    classname,
    onKeyDown,
    value,
    id,
    onChange,
  } = props;
  return (
    <>
      <div class="mb-2">
        <label htmlFor="exampleFormControlInput1" class="form-label">
          label={label}
        </label>
        <input
          type={type}
          name={name}
          className={`form-control ${classname}`}
          onKeyDown={onKeyDown}
          value={value}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default CustomInput;
