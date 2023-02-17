import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function SinglePatient() {
  let { id } = useParams();

  useEffect(() => {
    console.log(`/something/${id}`);
  }, []);

  return <div>Patient {id}</div>;
}

export default SinglePatient;
