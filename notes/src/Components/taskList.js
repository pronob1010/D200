import React from "react";

function TaskList(props) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {props.data}
      <span class="badge badge-primary badge-pill">
        <button type="button" class=" btn close btn-danger" aria-label="Close" onClick={()=>{props.Select(props.ID)}}>
          <span aria-hidden="true">&times;</span>
        </button>
      </span>
    </li>
  );
}

export default TaskList;
