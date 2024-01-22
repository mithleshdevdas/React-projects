import React, { useState } from "react";

function Counter() {
  // let counter = 5
  let [counter, setcounter] = useState(0);
  const AddValue = () => {
    // console.log('add value', counter);
    setcounter(counter + 1);
  };
  const removeValue = () => {
    // console.log('remove value', counter);
    setcounter(counter - 1);
  };
  return (
    <>
      <h1>counter value: {counter} </h1>
      <button onClick={AddValue}>add value {counter}</button> <br /> <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  );
}

export default Counter;


// 