import React from "react";

// LOCAL COMPONENTS
import { SimpleTimer } from "../../components";

const Dashboard = () => {
  return (
    <div className="ttDashboard">
      <h1>I am Dashboard</h1>
      <h2>Render your components here</h2>
      <hr />
      <SimpleTimer />
    </div>
  );
};

export default Dashboard;
