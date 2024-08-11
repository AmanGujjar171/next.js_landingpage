import React from "react";
import Button from "../button/button";



const Navbar: React.FC = () => {
  return (
    <div
      className=" w-[100%] h-[8vh] text-[#191619] bg-[#F5F5F5] flex justify-around items-center"
    >
      <div>
        <ul className="flex justify-between items-center w-[30vw] text-lg h-[5vh] ">
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className="text-4xl ">
        <h1>circle</h1>
      </div>
      <div>
        <ul className="flex justify-around items-center text-lg h-[5vh] w-[30vw] ">
          <li>Company</li>
          <li>Contact</li>
          <li>
            <Button title="Login"/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
