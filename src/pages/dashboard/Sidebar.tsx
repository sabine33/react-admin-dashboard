import React from "react";
import { Link } from "react-router-dom";
import InfoCard from "../../components/dashboard/InfoCard";
import PatientsTable from "../../components/dashboard/PatientsTable";
import "./Sidebar.scss";

function Dashboard() {
  return (
    <nav
      className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
      id="navbarVertical"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-n2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarCollapse"
          aria-controls="sidebarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link
          to="/dashboard"
          className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 d-flex align-items-center"
        >
          <img
            src="https://www.pngkey.com/png/detail/986-9860667_hospital-management-system-png.png"
            className="img-fluid"
            width="100"
          />
        </Link>
        <div className="navbar-user d-lg-none">
          <div className="dropdown">
            <a
              href="#"
              id="sidebarAvatar"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="avatar-parent-child">
                <img
                  alt="Image Placeholder"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyfSR4VufVmGo7NJbQ2q7tRP8LtBXTRV_TwxRJFg&s"
                  className="avatar avatar- rounded-circle"
                />
                <span className="avatar-child avatar-badge bg-success"></span>
              </div>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="sidebarAvatar"
            >
              <a href="#" className="dropdown-item">
                Logout
              </a>
            </div>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="sidebarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/patients/list">
                Patients
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/users">
                Users
              </Link>
            </li>
          </ul>
          <div className="mt-auto">
            <ul className="navbar-collapse">
              <li className="nav-item">
                <button className="nav-link">
                  <i className="bi bi-box-arrow-left"></i> Logout
                </button>
              </li>
            </ul>
          </div>
          <hr className="navbar-divider my-5 opacity-20" />
        </div>
      </div>
    </nav>
  );
}

export default Dashboard;
