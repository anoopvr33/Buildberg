import React from "react";
import "../assets/estimate.css";

const Estimate = () => {
  return (
    <div className="estimate">
      <div className="sub-1">
        <h1>GET AN INSTANT ESTIMATE</h1>
        <p>
          BBC Buildberg Contracting is a full-service contracting company
          delivering high-quality construction solutions across commercial,
          residential, and interior fit-out sectors. Built on a foundation of
          integrity, technical expertise, and disciplined project management, we
          provide end-to-end services that ensure precision at every stage—from
          planning and execution to final handover. Our team of skilled
          professionals works closely with clients, consultants, and
          stakeholders to deliver projects that meet the highest standards of
          safety, quality, and efficiency. With a commitment to innovation,
          timely delivery, and lasting value, BBC Buildberg Contracting
          transforms concepts into well-executed spaces that reflect
          reliability, functionality, and excellence.
        </p>{" "}
        <br />
        <button onClick={() => (window.location.href = "/projects")}>
          View Projects
        </button>
      </div>
      <div className="sub-2">
        <img src="/project1.3.jpg" alt="" />
        <img className="float" src="/images.2.jpg" alt="" />
      </div>
    </div>
  );
};

export default Estimate;
