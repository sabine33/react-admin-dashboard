import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import AddButton from "../../components/dashboard/patients/AddButton";
import "./DashboardLayout.css";
import Sidebar from "./Sidebar";

function DashboardLayout({
  isAllowed,
  redirectPath,
}: {
  isAllowed: boolean;
  redirectPath: string;
}) {
  return (
    <div>
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Sidebar></Sidebar>

        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          <header className="bg-surface-primary border-bottom pt-6">
            <div className="container-fluid">
              <div className="mb-npx">
                <div className="row align-items-center">
                  <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                    <h1 className="h4 mb-0 ls-tight">
                      Patient Management Dashboard
                    </h1>
                  </div>
                  <div className="col-sm-6 col-12 text-sm-end">
                    <AddButton />
                  </div>
                </div>
                <ul className="nav nav-tabs mt-4 overflow-x border-0 mb-4">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li
                        v-for="item in getBreadcrumb"
                        className="breadcrumb-item"
                      >
                        <Link to="`$/{item}`">{22}</Link>
                      </li>
                    </ol>
                  </nav>
                </ul>
              </div>
            </div>
          </header>
          <main className="container-fluid py-6 bg-surface-secondary">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
