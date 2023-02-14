import React from "react";
import business from "../assets/business.jpg";

const Info = () => {
  return (
    <>
      <div className="app__info">
        <img src={business} alt="business" />
        <div>
          <h2>Your Business On The Web</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            aspernatur non quas consequatur consectetur voluptatum inventore
            accusamus sint ipsa nobis! Excepturi doloribus voluptatum beatae,
            repellat accusantium sunt a consequuntur debitis.
          </p>
          <a href="#!" className="btn">
            Learn More!
          </a>
        </div>
      </div>

      <div className="app__portfolio">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <img
            src={`https://source.unsplash.com/random/20${item}x200`}
            alt="img"
            key={item}
          />
        ))}
      </div>
    </>
  );
};

export default Info;
