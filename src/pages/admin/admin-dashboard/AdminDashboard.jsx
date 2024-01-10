import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../main";
import "../admin-dashboard/AdminDashboard.css"

const AdminDashboard = () => {
  const token = localStorage.getItem("token");

  const [dashboardData, setDashboardData] = useState({
    totalCount: 0,
    holdCount: 0,
    repoCount: 0,
    releaseCount: 0,
    confirmationCount: 0,
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setDashboardData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="dashboard-container">
      {/* Display counts in different styled cards */}
      <div className="dashboard-card" style={{ backgroundColor: "#7FFFD4" }}>
        <h3>Total Count</h3>
        <p>{dashboardData.totalCount}</p>
      </div>
      <div className="dashboard-card" style={{ backgroundColor: "#FFA500" }}>
        <h3>Hold Count</h3>
        <p>{dashboardData.holdCount}</p>
      </div>
      <div className="dashboard-card" style={{ backgroundColor: "#A52A2A" }}>
        <h3>Repo Count</h3>
        <p>{dashboardData.repoCount}</p>
      </div>
      <div className="dashboard-card" style={{ backgroundColor: "#008000" }}>
        <h3>Release Count</h3>
        <p>{dashboardData.releaseCount}</p>
      </div>
      <div className="dashboard-card" style={{ backgroundColor: "#808000" }}>
        <h3>Confirmation Count</h3>
        <p>{dashboardData.confirmationCount}</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
