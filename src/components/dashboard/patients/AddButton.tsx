import React from "react";
import { useNavigate } from "react-router";

function AddButton() {
  const navigate = useNavigate();
  return (
    <div className="mx-n1">
      <button
        onClick={() => {
          navigate("/dashboard/patients/add");
        }}
        className="btn d-inline-flex btn-sm btn-primary mx-1"
      >
        <span className="pe-2">
          <i className="bi bi-plus"></i>
        </span>
        <span>Add New Patient</span>
      </button>
    </div>
  );
}

export default AddButton;
