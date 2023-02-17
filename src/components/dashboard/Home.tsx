import React from "react";
import InfoCard from "./InfoCard";
import PatientsTable from "./PatientsTable";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="row g-6 mb-6">
          <InfoCard />
        </div>
        <PatientsTable />
      </div>
    </div>
  );
}

export default Home;
