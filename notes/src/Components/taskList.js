import React from "react";

function TaskList(props) {
  return (
    <div className="col-4">
       
        <div className="col-8">
          <div className="card-body bg-light pt-1">
            <h5 className="card-title">{props.data.title}</h5>
            <p className="card-text">{props.data.desc}</p>
          </div>
          <div className="col-2">
            <span className="badge badge-primary badge-pill">
              <button
                type="button"
                className=" btn close btn-primary m-2"
                aria-label="Close"
                onClick={() => {
                  props.EditSelect(props.ID);
                }}
              >
                <span aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </span>
              </button>
              <button
                type="button"
                className=" btn close btn-danger"
                aria-label="Close"
                onClick={() => {
                  props.Select(props.ID);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </span>
          </div>
        </div>
       
    </div>
  );
}

export default TaskList;
