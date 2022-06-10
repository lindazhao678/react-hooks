//As the function will recreated every time when the states change. useMemo hook can be used for improvement perfermance and decrease latency on huge computations(algorism) that in the application
import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export default function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

//useMemo prevent the findLongestName function will not recomputed with any states change (for example toggle state changes with click the button ). the findLongestName function will only computed when the dependecy change, which is the data change in this case.
  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div>
        <h1>useMemo</h1>
      <div> {getLongestName} </div>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}