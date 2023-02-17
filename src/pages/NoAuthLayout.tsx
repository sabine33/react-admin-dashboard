import React from "react";
import { Outlet } from "react-router";
import NoAuthHeader from "./NoAuthHeader";

function NoAuthLayout() {
  return (
    <div className="app-container">
      <NoAuthHeader />
      <div className="container-fluid mt-5">
        <div className="heading h2 text-center">Patient Profile Management</div>
        <div className="row">
          <div className="col-sm-12 mx-auto col-md-8 col-lg-6  mt-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoAuthLayout;
