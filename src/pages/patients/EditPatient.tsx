import React from "react";
import { useParams } from "react-router";

function EditPatient() {
  const { id } = useParams();
  return <div>EditPatient: {id}</div>;
}

export default EditPatient;
