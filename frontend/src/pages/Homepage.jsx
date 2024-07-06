import React from "react";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <section>
        <div
          className="d-flex justify-content-center align-items-center text-center"
          style={{ height: "50rem" }}>
          <div>
            <h1>Welcome to Celerates</h1>
            <p>Improve your productivity with simplicity</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
