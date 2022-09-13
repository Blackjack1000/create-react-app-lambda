import { useState } from "react";
import GeneralSettings from "./Components/GeneralSettings";
import MachineSettings from "./Components/MachineSettings";
import ShowResults from "./Components/ShowResults";
import allItems from "./dataItems";

function App() {
  const [selectedItem, setSelectedItem] = useState(
    Object.entries(allItems)[0][0]
  );
  const [selectedCount, setSelectedCount] = useState(1);
  const [machines, setMachines] = useState({
    assembler: 0.5,
    furnace: 1,
    chemicalLab: 1,
    belts: 15,
  });

  return (
    <div style={{ marginLeft: "0.5em" }}>
      <GeneralSettings
        item={selectedItem}
        setSelectedItem={(item) => {
          setSelectedItem(item);
        }}
        count={selectedCount}
        setSelectedCount={(count) => {
          setSelectedCount(count);
        }}
      />

      <MachineSettings
        machines={machines}
        setMachines={(changedMachine, value) => {
          let temp = { ...machines };
          temp[changedMachine] = value;
          console.log(changedMachine, value);
          setMachines(temp);
        }}
      />

      <ShowResults
        item={selectedItem}
        count={selectedCount}
        machines={machines}
      />
    </div>
  );
}

export default App;
