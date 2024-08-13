"use client"
import { useState } from "react";
import { FiStar } from "react-icons/fi";
import Input from "@/src/components/Input";
import Button from "@/src/components/Button";

const SideBar = () => {
  const [stars, setStarts] = useState(0);
  const handleStarClick = (index) => {
    setStarts(index);
    setForm((prevForm) => ({ ...prevForm, rating: index }));
    
  };
  

  const [form, setForm] = useState({
    search: "",
    name: "",
    designation: "",
    rating:stars,
  });
  const handleChange = (e) => {
     
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

  

    
  };
  return (
    <>
      <div className="bg-white h-screen mt-1 rounded-lg p-3">
        <h2 className="text-2xl my-2 font-bold text-[#2C7B63]">Filter</h2>
        <form>
          <div>
            <Input
              title="Search"
              type="text"
              name="search"
              placeholder="Enter Keyword"
             onChange={handleChange}
            />
          </div>
          <div>
            <Input
              title="Name"
              type="text"
              name="name"
              placeholder="Search By Name"
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              title="Designation"
              type="text"
              name="designation"
              placeholder="Search By Designation"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Rating</label>
            <div className="flex gap-4 p-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex justify-center">
                  <FiStar
                    size={25}
                    strokeWidth={0}
                    fill={index + 1 <= stars ? "gold" : "#D6DBDF"}
                    cursor="pointer"
                    className="star"
                    name="rating"
                    onClick={() => handleStarClick(index + 1)}
                  />
                </div>
              ))}
            </div>
          </div>
          <Button label="Filter" onClick={()=>handleSubmit}/>
        </form>
      </div>
    </>
  );
};

export default SideBar;
