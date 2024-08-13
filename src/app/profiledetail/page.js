"use client"
// import { useState } from "react";
import profileImage from "@/public/profile.jpg";
import { HiBriefcase } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import ProgressBar from "@/src/components/ProgressBar";
import Navigation from "@/src/components/Navigation"


const ProfileDetail = () => {
 const userDetail = {
    name:"",
    expertise:"",
    location:"",
    mail:"",
    address:"",
    phoneNumber:"",
    about:"",
    education:"",
    workHistory:"",
    joinDate:"",
    Languages:"",


 }

  return (
    <>
      <div>
        <div className="grid sm:grid-cols-12 m-2 lg:m-10 gap-3">
          {/* left side bar */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3  bg-white p-6 rounded-lg">
            <div className="flex flex-col gap-y-4">
                <div className="flex justify-center">
              <img
                src={profileImage.src}
                alt=""
                className="w-[200px] h-[200px] rounded-xl object-cover"
              />
              </div>








              <h2 className="text-xl font-semibold">John Doe</h2>   

              <div className="flex flex-wrap gap-2 items-center">
              <HiBriefcase />
              <p>Front-end Developer</p>

              </div>    

              <div className="flex flex-wrap gap-2 items-center">
              <MdLocationOn />
              <p>San Francisco, USA</p>

              </div>    
              <div>
                <p className="font-bold">Email Address</p>
                <p>johndoe@email.com</p>
                
              </div>

              <div>
                <p className="font-bold">Home address</p>
                <p>New York, NJ 07103, California,
                United States of America</p>
                
              </div>
            
            
              <div>
                <p className="font-bold">Phone number</p>
                <p>
                +00 123 456 789 / +12 345 678</p>
                
              </div>

            </div>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9 flex flex-col gap-y-3">
          <div className=" bg-white p-6 rounded-lg">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold mt-5">General information</h2>
             <h4 className="text-lg font-bold">About me</h4>
             <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo delectus fugiat suscipit in nesciunt ut rem officiis ipsam eligendi asperiores totam, esse veniam quod dolore consequatur aliquam maiores. Laboriosam dicta repellat nesciunt mollitia, sapiente ex hic dolorem, atque voluptatem vitae libero voluptas! Consequuntur enim, et voluptas aliquid eum praesentium quidem, quas velit numquam totam, rem officia facilis. Fugiat incidunt earum quasi. Ullam, incidunt soluta dolor, veritatis id possimus, aperiam commodi voluptatum et odit fuga eligendi aliquam doloribus. Fugiat possimus iste veniam cupiditate, ipsam repellat facilis quae laborum iure? Hic obcaecati ipsum similique? Obcaecati, cumque! Beatae autem omnis sit quasi odit.

             </p>
              </div>
           
              </div>
              <div className=" bg-white p-6 rounded-lg grid grid-cols-2 gap-y-8">
                <div>
                <p className="font-bold">Education</p>
                <p>Lorem, ipsum dolor.</p>
                </div>

                <div>

                <p className="font-bold">Work History</p>
                <p>Twitch, Google, Apple</p>
                </div>

                <div>
                <p className="font-bold">Join Date</p>
                <p>1-Jan-2024</p>
                </div>
                <div>
                <p className="font-bold">Languages</p>
                <p>  English, German, Italian, Spanish</p>
                </div>
                
              </div>

              {/* progress bar */}

              <div className=" bg-white p-6 rounded-lg grid grid-cols-2 gap-y-4">
            
            <ProgressBar width="70" title="Vue"/>

             
             <ProgressBar width="60" title="Angular"/>

             <ProgressBar width="50" title="HTML"/>

             <ProgressBar width="60" title="CSS"/>

             <ProgressBar width="90" title="Marketing"/>

             <ProgressBar width="80" title="React"/>
             



              </div>
              <div className="m-4">
               
             
              <Navigation label="Book Now" link="/bookappointment" />
              
              </div>
      
          
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetail;
