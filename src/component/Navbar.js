import React from "react";

const Navbar = () => {
  return (
    <div className="app__navbar">
      <ul className="app__navbar-list">
        {["Home", "About", "Services", "Contact"].map((item) => (
          <li className="app__navbar-item">
            <a href={`#${item}`} className="app__navbar-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
