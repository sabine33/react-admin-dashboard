import React from "react";

function InfoCard() {
  return (
    <div className="col-xl-3 col-sm-6 col-12">
      <div className="card shadow border-0">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                Patients
              </span>
              <span className="h1 font-bold mb-0">{20}</span>
            </div>
            <div className="col-auto">
              <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                <i className="bi bi-person"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
