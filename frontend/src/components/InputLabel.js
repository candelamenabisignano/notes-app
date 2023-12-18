import React from "react";

const InputLabel = ({ title, type, labelStyle, inputStyle, divStyle, change, }) => {
  return (
    <>
      <div className={divStyle}>
        <label className={labelStyle}>{title}</label>
        <input
          name={title}
          placeholder=" "
          type={type}
          className={inputStyle}
          onChange={change}
        />
      </div>
    </>
  );
};

export default InputLabel;
