import React from "react";
import allMachines from "../dataMachines";

function MachineSettings(props) {
  function showOptions(options) {
    return options.map((i) => {
      return (
        <option key={i} value={i}>
          {i}
        </option>
      );
    });
  }

  return (
    <div>
      <h4 style={{ marginBottom: "0.5em" }}>Machine settings</h4>
      <div>
        {(() => {
          return Object.keys(allMachines).map((currentMachine) => {
            return (
              <div key={currentMachine}>
                <label>{currentMachine}: </label>
                {allMachines[currentMachine].length > 1 ? (
                  <select
                    onChange={(event) => {
                      props.setMachines(currentMachine, event.target.value);
                    }}
                  >
                    {showOptions(allMachines[currentMachine])}
                  </select>
                ) : (
                  allMachines[currentMachine][0]
                )}
              </div>
            );
          });
        })()}
      </div>
    </div>
  );
}

export default MachineSettings;
