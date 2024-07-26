import React from "react";
import image from "@/public/profile.jpg";
import { FiStar } from "react-icons/fi";
import Navigation from "@/components/Navigation";

const ProfileCard = () => {
  const user = {
    name: "Bonnie Green",
    designation: "Visual Designer",
    image: image.src,
    rating: 3,
  };

  const stars = user.rating;
  return (
    <>
      <div className="w-full sm:max-w-[300px] bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex flex-col items-center py-5">
          <img
            className="w-32 h-32 mb-3 rounded-full shadow-lg object-cover"
            src={user.image}
            alt=""
          />
          <h5 className="mb-1 text-xl font-medium text-black">{user.name}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {user.designation}
          </span>

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
                />
              </div>
            ))}
          </div>

          <div className="flex gap-x-2">
            <Navigation label="View Profile" link="/profiledetail" />
            <Navigation label="Book" link="/bookappointment" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
