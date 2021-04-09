import React from "react";

const AutoInputForm = ({ onChange, value1, value2, label1, label2 }) => (
  <div className="autoInputForm">
    <input
      type="text"
      name="name"
      value={value1 || ""}
      label={label1}
      placeholder="e.g- Razer Laptop"
      onChange={onChange}
    />
    <input
      type="text"
      name="value"
      value={value2 || ""}
      label={label2}
      placeholder="$100"
      onChange={onChange}
    />
  </div>
);

export default AutoInputForm;
