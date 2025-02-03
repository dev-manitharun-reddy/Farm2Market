import React from "react";
import "../styles/Teams.css";

const Teams = () => {
  return (
    <section className="teams" id="teams">
      <div className="max-width">
        <h2 className="title">Meet Our Team</h2>
        <p>
          At INIZIO FARMS, our team is united by a shared passion for
          sustainable farming...
        </p>
        <div className="carousel ">
          <div className="card">
            <div className="box">
              <img
                src="https://ik.imagekit.io/manitharunreddy/2.PNG?updatedAt=1730787182078"
                alt="img"
              />
              <div className="text">KALANDAR</div>
              <p>CHIEF EXECUTIVE OFFICER (CEO).</p>
            </div>
          </div>
          {/* Add more team members here */}
          <div className="card">
            <div className="box">
              <img
                src="https://ik.imagekit.io/manitharunreddy/2.PNG?updatedAt=1730787182078"
                alt="img"
              />
              <div className="text">KALANDAR</div>
              <p>CHIEF EXECUTIVE OFFICER (CEO).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
