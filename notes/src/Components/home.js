import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import TaskList from "./taskList";

function Home() {
  const [InputValue, setInputValue] = useState({
    title: "",
    desc: "",
  });

  const inputValues = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputValue((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
    // console.log(InputValue);
  };

  const [FinalSave, setFinalSave] = useState([]);

  const saveText = () => {
    setFinalSave((oldData) => {
      return [...oldData, InputValue];
    });

    setInputValue({
      title: "",
      desc: "",
    });
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
    <div className=" p-4">
      <h2 className="text-center"> Note Book </h2>
      <div className="row pt-4">
        <div className="col-10 mx-auto">
          <div className="mb-3">
            <input
              type="text"
              className="form-control mb-1"
              placeholder="Add title here.. "
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              name="title"
              value={InputValue.title}
              onChange={inputValues}
            />
            <div className="form-floating mb-1">
              <textarea
                className="form-control"
                style={{ height: "8rem" }}
                placeholder=""
                name="desc"
                value={InputValue.desc}
                onChange={inputValues}
                id="floatingTextarea2"
              ></textarea>
              <label for="floatingTextarea2">Despription </label>
            </div>
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
          <hr />
          <div className="row">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
