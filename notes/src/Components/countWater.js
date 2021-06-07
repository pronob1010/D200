import React, { useState } from "react";

function Water() {
  const [text, settext] = useState("");
  const [number, setnumber] = useState(0);

  const inc = () => {
    settext("text-dark");
    setnumber(number + 1);
  };

  const dec = () => {
    if (number > 0) {
      settext("text-dark");
      setnumber(number - 1);
    } else {
      settext("text-danger");
      alert("It's 0!!!");
    }
  };
  const reset = () => {
    setnumber(0);
  };

  return (
    <div className="container p-4">
      <div className="bg-light p-4 text-center rounded">
        <h1 className={text}>{number} </h1>
        <button className="btn btn-primary m-1" onClick={inc}>
          +
        </button>
        <button className="btn btn-primary  m-1" onClick={dec}>
          -
        </button>
        <button className="btn btn-primary  m-1" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="pt-2">
        <h2>Standerd Water for Daily : 10 </h2>
        <h2>Your score : {number} </h2>
      </div>
    </div>
  );
}

export default Water;
