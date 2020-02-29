import React from "react";
import Sidebar from "../navibar/Sidebar";
import Navibar from "../navibar/Navibar";
import "./dash.css";

const Dashboard = () => {
  return (
    <div className="dash-wrap">
      <div className="dash-top">
        <Navibar />
      </div>
      <div className="dash-lower">
        <div className="dash-aside">
          <Sidebar />
        </div>
        <div className="dash-main"></div>
      </div>
    </div>
  );
};

export default Dashboard;
