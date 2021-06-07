import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import TaskList from "./taskList";

function Home() {
  const [InputValue, setInputValue] = useState();

  const inputValues = (event) => {
    setInputValue(event.target.value);
  };

  const [FinalSave, setFinalSave] = useState([]);

  const saveText = () => {
    setFinalSave((oldData) => {
      return [...oldData, InputValue];
    });
    setInputValue("");
  };

  const deleteItem = (PassedID) => {
    setFinalSave((oldList) => {
      return oldList.filter((currentElement, ItemID) => {
        return ItemID !== PassedID;
      });
    });
  };

  const editItem = (PassID) => {
    console.log("Clicked for Edit.");
  };

  return (
    <div className="container p-4">
      <h2 className="text-center"> Note Book </h2>
      <div className="row pt-4">
        <div className="col-10 mx-auto">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control "
              placeholder="Add text here.. "
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={InputValue}
              onChange={inputValues}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={saveText}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto">
          <h3>Your Notes : </h3>
          <ul class="list-group">
            {FinalSave.map((item, id) => {
              return (
                <TaskList
                  key={id}
                  ID={id}
                  data={item}
                  EditSelect={editItem}
                  Select={deleteItem}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
