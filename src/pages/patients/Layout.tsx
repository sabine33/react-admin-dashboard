import React from "react";
import { Outlet } from "react-router";

function ListPatients() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ListPatients;
