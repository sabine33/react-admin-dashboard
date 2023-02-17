import React from "react";
import { Link } from "react-router-dom";
import { IPatient } from "../../interfaces";

const patientsList: Partial<IPatient>[] = [
  {
    id: 1,
    full_name: "Sabin Khanal",
    allergies: ["Nose"],
    address: "Kathmandu",
    is_special_attention: false,
    email: "ak@ak.com",
    date_of_birth: "2022-11-01",
  },
  {
    id: 2,
    full_name: "Rabin Khanal",
    allergies: ["Neck"],
    address: "Kathmandu",
    is_special_attention: false,
    email: "ak0014@gmail.com",
    date_of_birth: "2022-12-01",
  },
];

const ViewPatientButton = ({ id }: { id: number }) => {
  return (
    <Link to={`/dashboard/patients/${id}`} className="btn btn-sm btn-neutral">
      View
    </Link>
  );
};
const EditPatientButton = ({ id }: { id: number }) => {
  return (
    <Link
      to={`/dashboard/patients/edit/${id}`}
      className="btn btn-sm btn-neutral"
    >
      Edit
    </Link>
  );
};

function PatientsTable() {
  return (
    <div className="card shadow border-0 mb-7">
      <div className="card-header">
        <h5 className="mb-0">Special Patients</h5>
        <p>Special attention patients are displayed with red circle.</p>
      </div>
      <div className="table-responsive">
        <table className="table table-hover table-nowrap">
          <thead className="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Needs Special Attention</th>
              <th scope="col">Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {patientsList.map((patient) => (
              <tr>
                <td>
                  <img className=" avatar avatar-sm rounded-circle me-2" />
                  <a
                    className="text-heading font-semibold
                               text-primary"
                  >
                    {patient.full_name}
                  </a>
                </td>
                <td>{patient.phone}</td>
                <td>
                  <a className="text-heading font-semibold" href="#">
                    {patient.email}
                  </a>
                </td>

                <td>
                  <span className="badge badge-lg badge-dot">
                    {patient.is_special_attention ? "YES" : "NO"}
                  </span>
                </td>
                <td className="text-end">
                  <ViewPatientButton id={patient.id!} />
                  <EditPatientButton id={patient.id!} />
                  <button
                    type="button"
                    className="btn btn-sm btn-square btn-neutral text-danger-hover"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer border-0 py-5">
        <span className="text-muted text-sm">
          Showing {2} items out of {3}
          results found
        </span>
      </div>
    </div>
  );
}

export default PatientsTable;
