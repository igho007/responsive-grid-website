import React from "react";

const Showcase = () => {
  return (
    <div className="app__container">
      <header className="app__header-showcase">
        <h2>Your Web Presence</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
          accusantium earum. Officiis cum ipsam excepturi necessitatibus illo,
          sit veritatis natus.
        </p>
        <a href="#!" className="btn">
          Read More!
        </a>
      </header>
      <div className="app__header-box box-a">
        <h4>Membership</h4>
        <p className="app__header-price">#200/mo</p>
        <a href="#!" className="btn">
          Buy Now
        </a>
      </div>
      <div className="app__header-box box-b">
        <h4>Membership</h4>
        <p className="app__header-price">#400/mo</p>
        <a href="#!" className="btn">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Showcase;
