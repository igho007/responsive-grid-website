import React from "react";
import { FaChartPie, FaGlobe, FaCog, FaUsers } from "react-icons/fa";

const Boxes = () => {
  return (
    <div className="app__boxes">
      <div className="app__box">
        <FaChartPie />
        <h3>Analytics</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          repellat neque magni facere ea possimus laboriosam rerum nisi odit
          delectus?
        </p>
      </div>
      <div className="app__box">
        <FaGlobe />
        <h3>Marketing</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          repellat neque magni facere ea possimus laboriosam rerum nisi odit
          delectus?
        </p>
      </div>
      <div className="app__box">
        <FaCog />
        <h3>Development</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          repellat neque magni facere ea possimus laboriosam rerum nisi odit
          delectus?
        </p>
      </div>
      <div className="app__box">
        <FaUsers />
        <h3>Support</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          repellat neque magni facere ea possimus laboriosam rerum nisi odit
          delectus?
        </p>
      </div>
    </div>
  );
};

export default Boxes;
