"use client";
import React, { useState, useMemo } from "react";
import Input from "@/components/Input";
import Select from "@/components/Select";

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "",
    credentials: "",

    currentStudent: "false",
    phoneNumber: "",
    bio: "",
    interests: "",

    workExperience: [],
    education: [],
    certifications: [],

    other: [],

    scheduling: {
      availabilityOptions: [
        {
          day: "Monday",
          duration: 60,
          end: "17:00",
          start: "09:00",
        },
      ],
    },
    payment: {
      hourlyRate: 0,
    },
    agreementToTerms: true,
    isActive: true,
  });

  const taskStatus = useMemo(
    () => [
      {
        id: 0,
        value: "No",
      },
      {
        id: 1,
        value: "Yes",
      },
    ],
    []
  );

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const addSpecialty = (e) => {
    const { name, value } = e.target;
    console.log(value);
    if (e.key === "Enter" && value.trim() !== "") {
      e.preventDefault();
      setForm((prevForm) => ({
        ...prevForm,
        [name]: [...prevForm[name], value.trim()],
      }));
      e.target.value = "";
    }
  };

  const deleteItem = (listName, index) => {
    const updatedList = form[listName].filter((_, idx) => idx !== index);
    setForm({ ...form, [listName]: updatedList });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // updateClinician(user, form);
  };

  const createInputField = (label, field, items) => {
    return (
      <>
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          type="text"
          name={field}
          onKeyDown={addSpecialty}
          placeholder={`Type ${label.toLowerCase()} and press Enter`}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
        />
        <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-3">
          {items.map((item, index) => (
            <li
              key={`${field}-${index}`}
              className="flex justify-between items-center p-2 bg-gray-100 rounded-md"
            >
              <span>{item}</span>
              <button
                onClick={() => deleteItem(field, index)}
                className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded block"
              >
                &#x274C;
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <div className="container max-w-4xl mx-auto p-10 bg-white my-10 rounded-lg">
        <div className="">
          <h2 className="text-[30px] sm:text-[35px] font-semibold leading-[52.5px] tracking-tight text-black my-5">
            Create an Account
          </h2>
          <p>Complete the form below to sign up for our membership service.</p>
          <form onSubmit={handleSubmit} className="">
            <div className="sm:grid sm:grid-cols-2 gap-x-3 my-5">
              <Input
                type="text"
                name="firstName"
                title="First Name"
                value={form.firstName}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="lastName"
                title="Last Name"
                value={form.lastName}
                onChange={handleChange}
              />
              <Input
                type="mail"
                name="email"
                title="Email"
                value={form.email}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="phoneNumber"
                title="Phone Number"
                value={form.phoneNumber}
                onChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                title="Password"
                value={form.password}
                onChange={handleChange}
              />
              <Select
                label={"Current Student"}
                data={taskStatus}
                name="currentStudent"
                value={form.currentStudent}
                onChange={handleChange}
              />
              <Input
                type="datetime-local"
                name="availabilityOptions"
                title="Availability Options"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="payment"
                title="Payment Per Hour"
                value={form.payment.hourlyRate}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                About Us
              </label>
              <textarea
                rows={4}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
                value={form.bio}
                name="bio"
              />
            </div>
            <div className="sm:grid sm:grid-cols-2 gap-x-3 my-5">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Education
                </label>
                <input
                  type="text"
                  name="education"
                  placeholder="Type education and press Enter"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
                  onKeyDown={addSpecialty}
                />
                <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-3">
                  {/* Display added specialties */}
                  {form.education.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center p-2 bg-gray-100 rounded-md"
                    >
                      <span>{item}</span>
                      <button
                        type="button"
                        onClick={() => deleteItem("education", index)}
                        className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      >
                        &#x274C;
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <Input
                type="text"
                name="interests"
                title="Interests"
                value={form.interests}
                onChange={handleChange}
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">Expertise</h3>
            <div className="sm:grid grid-cols-3 md:grid-cols-3 gap-4 my-5">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Certifications
                </label>
                <input
                  type="text"
                  name="certifications"
                  placeholder="Type certifications and press Enter"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
                  onKeyDown={addSpecialty}
                />
                <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-3">
                  {/* Display added specialties */}
                  {form.certifications.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center p-2 bg-gray-100 rounded-md"
                    >
                      <span>{item}</span>
                      <button
                        type="button"
                        onClick={() => deleteItem("certifications", index)}
                        className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      >
                        &#x274C;
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  work Experience
                </label>
                <input
                  type="text"
                  name="workExperience"
                  placeholder="Type work Experience and press Enter"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
                  onKeyDown={addSpecialty}
                />
                <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-3">
                  {/* Display added specialties */}
                  {form.workExperience.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center p-2 bg-gray-100 rounded-md"
                    >
                      <span>{item}</span>
                      <button
                        type="button"
                        onClick={() => deleteItem("workExperience", index)}
                        className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      >
                        &#x274C;
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Other
                </label>
                <input
                  type="text"
                  name="other"
                  placeholder="Type other and press Enter"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
                  onKeyDown={addSpecialty}
                />
                <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-3">
                  {/* Display added specialties */}
                  {form.other.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center p-2 bg-gray-100 rounded-md"
                    >
                      <span>{item}</span>
                      <button
                        type="button"
                        onClick={() => deleteItem("other", index)}
                        className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      >
                        &#x274C;
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-[#2C7B63] text-white rounded-md "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
