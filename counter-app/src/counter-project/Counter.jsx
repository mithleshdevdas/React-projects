import React, { useState } from "react";

function Counter() {
  const [counter, setcounter] = useState(0);

  const add = () => {
    if (counter == counter) {
      setcounter(counter + 1);
    }
    if (counter == 20) {
      setcounter(counter);
    }
  };

  const remove = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };
  return (
    <>
      <div>
        <h1>
          {" "}
          couter app{" "}
          <span>
            <b>{counter}</b>
          </span>
        </h1>
        <button onClick={add}>add</button>
        <button onClick={remove}>remove</button>
      </div>
    </>
  );
}

export default Counter;
