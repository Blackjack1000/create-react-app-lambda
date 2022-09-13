import { useState } from "react";
import allItems from "../dataItems";
import "../css/ShowResults.css";

function ShowResults(props) {
  const [options, setOptions] = useState({
    groupMachines: true,
    showBelts: true,
    showMadeAt: false,
  });
  const [roundTo, setRoundTo] = useState(4);

  function doMath() {
    //a list of all required machines
    let neededProduction = [];

    //recursion
    function repeat(item, count, from) {
      if (!allItems[item]) {
        // console.log(item + " does not exist.");
        return false;
      }

      let machinesNeeded =
        (count * allItems[item].craftTime) /
        allItems[item].itemsPerCraft /
        props.machines[allItems[item].madeAt];

      neededProduction.push({
        type: item,
        count: machinesNeeded,
        from: from,
      });

      //repeat for all required items
      for (let i of allItems[item].requires) {
        repeat(
          i.split(" ")[1],
          (count * i.split(" ")[0]) / allItems[item].itemsPerCraft,
          item
        );
      }
    }

    repeat(props.item, props.count, "/");

    return neededProduction;
  }

  function results() {
    let resultData = doMath();

    if (options.groupMachines) {
      for (let i = 0; i < resultData.length; i++) {
        resultData[i] = {
          type: resultData[i].type,
          count: resultData[i].count,
        };
        for (let j = resultData.length - 1; j > i; j--) {
          if (resultData[i].type === resultData[j].type) {
            resultData[i].count += resultData[j].count;
            resultData.splice(j, 1);
          }
        }
      }
    }

    console.log(roundTo);

    return resultData.map((i, ind) => {
      return (
        <tr key={ind}>
          <td>{allItems[i.type].name}</td>
          <td>
            {Math.ceil(i.count * Math.pow(10, roundTo)) / Math.pow(10, roundTo)}
          </td>
          <td hidden={!options.showMadeAt}>{allItems[i.type].madeAt}</td>
          <td hidden={options.groupMachines}>{i.from}</td>
          <td hidden={!options.showBelts}>
            {(
              ((i.count / allItems[i.type].craftTime) *
                allItems[i.type].itemsPerCraft) /
              props.machines.belts
            ).toFixed(2)}
          </td>
        </tr>
      );
    });
  }

  return (
    <div>
      <h4 style={{ marginBottom: "0.5em" }}>Results</h4>
      {(() => {
        return Object.keys(options).map((i) => {
          return (
            <div key={i}>
              <label>{i}: </label>
              <input
                type="checkbox"
                onChange={() => {
                  let temp = { ...options };
                  temp[i] = !temp[i];
                  setOptions(temp);
                }}
                checked={options[i]}
              ></input>
            </div>
          );
        });
      })()}

      <label>round to: </label>
      <input
        style={{ width: "2em" }}
        type="number"
        onChange={(event) => {
          if (event.target.value < 0) {
            event.target.value = 0;
          } else if (event.target.value > 4) {
            event.target.value = 4;
          }

          setRoundTo(event.target.value);
        }}
        onBlur={(event) => {
          if (event.target.value === "") {
            event.target.value = 0;
          }
        }}
        value={roundTo}
      ></input>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <table
          style={{
            // width: "20%",
            textAlign: "left",
          }}
        >
          <tbody>
            <tr>
              <th>Item</th>
              <th>Number</th>
              <th hidden={!options.showMadeAt}>Made at</th>
              <th hidden={options.groupMachines}>From</th>
              <th hidden={!options.showBelts}>Belts</th>
            </tr>

            {results()}
          </tbody>
        </table>

        <p>
          Total machines:{" "}
          {(() => {
            let t = 0;
            for (let i of doMath()) {
              t += Math.ceil(i.count);
            }

            return t;
          })()}
        </p>
      </div>
    </div>
  );
}

export default ShowResults;
