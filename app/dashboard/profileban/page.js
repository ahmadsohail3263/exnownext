import Button from "@/components/Button";
import Input from "@/components/Input";
import React from "react";

const page = () => {
  return (
    <div className="m-2 mt-10 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Profile Ban</h1>
      <p className="text-md font-semibold">Name: Bonnie Green</p>
      <p className="text-md font-semibold">Designation: Visual Designer
      </p>

      <form className="mt-6 flex flex-col justify-center items-center">
        <div className="flex gap-x-4">
          <Input title="From" type="date" />
          <Input title="To" type="date" />
          </div>
        <Button label="Submit" className="text-center"/>
      </form>

    </div>
  );
};

export default page;
