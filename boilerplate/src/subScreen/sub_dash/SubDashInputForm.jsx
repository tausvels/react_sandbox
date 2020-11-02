import React, { useState, useEffect } from "react";
import { AutoInputForm, SelectItemForm } from "../../components";
import { populateEmptyPrize } from "../../utils";

import "./style.css";

const SubDashInputForm = () => {
  const [option, setOption] = useState({
    isPhysical: true,
    prizes: [{ name: "", value: "", prizeType: "" }]
  });
  const [arr, setArr] = useState(option.prizes);
  const [hold, setHold] = useState([{ name: "", val: "" }]);
  // const temp = [];
  useEffect(() => {
    if (option.isPhysical) {
      populateEmptyPrize(option.prizes, setArr, "name", "value", "prizeType");
    }
  }, [option.prizes]);
  console.log("temp --> ", hold);
  return (
    <div className="subDash__inputForm">
      {arr.map((item, ind) => (
        <AutoInputForm
          key={ind}
          value1={arr[ind] ? arr[ind].name : null}
          label1="ENTER PRIZE"
          name1="name"
          placeholder1="e.g- Razor Laptop"
          value2={arr[ind] ? arr[ind].value : null}
          label2="ESTIMATED VALUE"
          name2="value"
          placeholder2="$100"
          onChange={(e) => {
            const newArrObj = [...arr];
            newArrObj[ind][e.target.name] = e.target.value;
            setOption({ ...option, prizes: newArrObj });
          }}
        />
      ))}
      <br />
      <h2>Select Options</h2>
      {arr.map((item, ind, arr) => (
        <SelectItemForm
          key={ind}
          options={arr}
          setOption={setOption}
          onChange={(e) => {
            if (e.target.name === "title") {
              if (hold[ind]) {
                const copy = [...hold];
                copy[ind].name = e.target.value;
                setHold(copy);
              } else {
                setHold([...hold, { name: e.target.value, val: "" }]);
              }
            }
            if (e.target.name === "select") {
              if (hold[ind]) {
                const copy2 = [...hold];
                copy2[ind].val = e.target.value;
                setHold(copy2);
              } else {
                setHold([...hold, { val: e.target.value, name: "" }]);
              }
            }
          }}
        />
      ))}
      {/* <h3>First: {first && first.name}</h3> */}
    </div>
  );
};

export default SubDashInputForm;
