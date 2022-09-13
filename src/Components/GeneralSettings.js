import React from "react";
import allItems from "../dataItems";

function GeneralSettings(props) {
  function showOptions() {
    return Object.keys(allItems).map((i) => {
      return (
        <option value={i} key={i}>
          {allItems[i].name}
        </option>
      );
    });
  }

  return (
    <div>
      <h4 style={{ marginBottom: "0.5em" }}>General settings</h4>

      <div>
        <label>Item: </label>
        <select
          onChange={(event) => {
            props.setSelectedItem(event.target.value);
          }}
          value={props.item}
        >
          {showOptions()}
        </select>
      </div>

      <div>
        <label>Items per second: </label>
        <input
          style={{ width: "4em" }}
          type="number"
          onChange={(event) => {
            if (event.target.value < 0) {
              event.target.value = 0;
            }
            props.setSelectedCount(event.target.value);
          }}
          onBlur={(event) => {
            if (event.target.value === "") {
              event.target.value = 0;
              props.setSelectedCount(0);
            }
          }}
          value={props.count}
        ></input>
      </div>
    </div>
  );
}

export default GeneralSettings;
