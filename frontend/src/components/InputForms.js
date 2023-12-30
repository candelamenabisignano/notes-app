import React from "react";

const InputForms = ({ title, type, labelStyle, inputStyle, divStyle, change,name }) => {
  return (
    <>
      <div className={divStyle}>
        <label className={labelStyle}>{title}</label>
        <input
          name={name}
          type={type}
          className={inputStyle}
          onChange={change}
        />
      </div>
    </>
  );
};

export default InputForms;
