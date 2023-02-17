import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./store";
import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import NoAuthLayout from "./pages/NoAuthLayout";
import Register from "./pages/auth/Register";
import NoPage from "./pages/NoPage";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Home from "./components/dashboard/Home";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ListPatients from "./pages/patients/Layout";
import UsersList from "./pages/users/UsersList";
import AddPatient from "./pages/patients/AddPatient";
import SinglePatient from "./pages/patients/SinglePatient";
import EditPatient from "./pages/patients/EditPatient";
import ListPatient from "./pages/patients/ListPatient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoAuthLayout />} />
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />

        <Route path="register" element={<Register />} />

        <Route
          path="/dashboard"
          element={<DashboardLayout isAllowed={false} redirectPath="/login" />}
        >
          <Route path="" element={<Home />}></Route>
          <Route path="patients" element={<ListPatients />}>
            <Route path="add" element={<AddPatient />}></Route>
            <Route path="edit/:id" element={<EditPatient />}></Route>
            <Route path=":id" element={<SinglePatient />}></Route>
            <Route path="list" element={<ListPatient />}></Route>
          </Route>
          <Route path="users" element={<UsersList />}></Route>
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
