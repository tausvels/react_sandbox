import React from "react";

const SelectItemForm = ({ value1, options, onChange, setOption }) => {
  return (
    <div className="physicalPrize">
      <input
        type="text"
        name="title"
        placeholder="Champion"
        value={value1}
        onChange={onChange}
      />
      <select name="select" onChange={onChange}>
        <option hidden disabled selected />
        {options.map(({ name }, ind) => (
          <option key={ind} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectItemForm;
