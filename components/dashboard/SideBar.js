"use client";
import { useState } from "react";
import Navigation from "../Navigation";
import Link from "next/link";

const SideBar = () => {
  const [active, setActive] = useState(true);

  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-lg h-screen">
        <ul>
          {["Users"].map((item, index) => (

            <li
              key={index}
              className={`font-semibold p-2 rounded cursor-pointer ${
                active === index
                  ? "bg-[#2C7B63] text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => handleClick(index)}
            >
             <Link href="/dashboard"> {item}</Link>
            
            </li>
          ))}
        </ul>

       
      </div>
    </>
  );
};

export default SideBar;
