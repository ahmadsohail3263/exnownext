import React from "react";
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";

const BookAppointment = () => {
  return (
    <>
      <div className=" bg-white m-5 items-center">
        <div className="bg-white m-5 py-10 px-5 rounded-lg text-center  ">
          <h1 className="text-black text-[30px] leading-[45px] font-bold text-center">
            Appointment Form
          </h1>
          <p className="mt-3">Please select data , time</p>
          

           
          <div>
            <form className="">
              <div className="flex flex-wrap justify-center items-center mt-5 gap-x-6">
                <div>
                  <Input type="date" id="date" title="Date:" />
                </div>
                <div>
                  <Input type="time" id="time" title="Time:" />
                </div>
              </div>
              <div>
                <Button label="Book Now" href=""/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
