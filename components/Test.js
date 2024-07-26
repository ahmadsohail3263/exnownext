"use client";
import React, { useState, useEffect } from "react";
import { useAuth, useClinician } from "@/src/context";

const DoctorRegisterForm = ({ params }) => {
  const user = params.id;
  // APIs
  const { selectedClinician, updateClinician, fetchClinician } = useClinician();
  const { userDetail } = useAuth();
  // States
  const [form, setForm] = useState({
    image: null,
    isVerified: false,
    name: "",
    fees: "",
    email: "",
    location: "",
    address: "",
    languages: "",
    description: "",
    qualification: "",
    university: "",
    topSpecialties: [],
    expertise: [],
    license: "",
    treatmentApproach: [],
    ageGroup: "",
    individuals: " ",
    communities: "",
    faith: "",
    insurancePlane: "",
    accountTitle: "",
    accountNumber: "",
    bankName: "",
  });

  // fetch data
  useEffect(() => {
    fetchClinician(user);
  }, [user]);

  useEffect(() => {
    if (selectedClinician) {
      setForm({
        isVerified: selectedClinician.isVerified,
        name: selectedClinician.name,
        fees: selectedClinician.fees,
        email: selectedClinician.email,
        location: selectedClinician.location,
        languages: selectedClinician.languages,
        address: selectedClinician.address,
        description: selectedClinician.description,
        qualification: selectedClinician.qualification,
        university: selectedClinician.university,
        topSpecialties: selectedClinician.topSpecialties,
        expertise: selectedClinician.expertise,
        license: selectedClinician.license,
        treatmentApproach: selectedClinician.treatmentApproach,
        ageGroup: selectedClinician.ageGroup,
        individuals: selectedClinician.individuals,
        communities: selectedClinician.communities,
        faith: selectedClinician.faith,
        insurancePlane: selectedClinician.insurancePlane,
        accountTitle: selectedClinician.accountTitle,
        accountNumber: selectedClinician.accountNumber,
        bankName: selectedClinician.bankName,
      });
    }
  }, [selectedClinician]);

  // Functions
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

  // Handle adding specialties to the list
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

  return (
    <>
      <div className="container mx-auto p-10 bg-white my-10 rounded-lg">
        <h2 className="text-[30px] text-center sm:text-[35px] font-semibold leading-[52.5px] tracking-tight text-black my-5">
          Update Profile
        </h2>
        <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
          <div className="xl:flex justify-between items-center ">
            <div className="flex flex-col sm:flex-row items-center gap-x-[36px] gap-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload Profile Image
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
                />
              </div>
              {userDetail?.role === "admin" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Verification Status
                  </label>
                  <select
                    value={form.isVerified}
                    name="isVerified"
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
                  >
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                  </select>
                </div>
              )}
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 gap-x-3 my-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                name="name"
                onChange={handleChange}
                placeholder="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="mail"
                value={form.email}
                name="email"
                onChange={handleChange}
                placeholder="mail"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <input
                type="text"
                value={form.languages}
                name="languages"
                onChange={handleChange}
                placeholder="language"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                value={form.location}
                name="location"
                onChange={handleChange}
                placeholder="location"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                value={form.address}
                name="address"
                onChange={handleChange}
                placeholder="address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Fees
              </label>
              <input
                type="text"
                value={form.fees}
                name="fees"
                onChange={handleChange}
                placeholder="address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              About Us
            </label>
            <textarea
              rows={4}
              onChange={handleChange}
              placeholder="about me"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              value={form.description}
              name="description"
            />
          </div>
          <h3 className="text-xl font-semibold mt-4">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Qualification
              </label>
              <input
                type="text"
                value={form.qualification}
                onChange={handleChange}
                name="qualification"
                placeholder="Qualification"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                University
              </label>
              <input
                type="text"
                value={form.university}
                name="university"
                onChange={handleChange}
                placeholder="University"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">
            Specialties & Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Top Specialties
              </label>
              <input
                type="text"
                name="topSpecialties"
                placeholder="Type specialty and press Enter"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
                onKeyDown={addSpecialty}
              />
              <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-3">
                {/* Display added specialties */}
                {form.topSpecialties.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-2 bg-gray-100 rounded-md"
                  >
                    <span>{item}</span>
                    <button
                      type="button"
                      onClick={() => deleteItem("topSpecialties", index)}
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
                Expertise
              </label>
              <input
                type="text"
                name="expertise"
                placeholder="Type expertise and press Enter"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
                onKeyDown={addSpecialty}
              />
              <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-3">
                {/* Display added specialties */}
                {form.expertise.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-2 bg-gray-100 rounded-md"
                  >
                    <span>{item}</span>
                    <button
                      type="button"
                      onClick={() => deleteItem("expertise", index)}
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
                Treatment Approach
              </label>
              <input
                type="text"
                name="treatmentApproach"
                placeholder="Type treatment Approach and press Enter"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
                onKeyDown={addSpecialty}
              />
              <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-3">
                {/* Display added specialties */}
                {form.treatmentApproach.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-2 bg-gray-100 rounded-md"
                  >
                    <span>{item}</span>
                    <button
                      type="button"
                      onClick={() => deleteItem("treatmentApproach", index)}
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
                License
              </label>
              <input
                type="text"
                value={form.license}
                name="license"
                onChange={handleChange}
                placeholder="license"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">Client Focus</h3>
          <div className="sm:grid sm:grid-cols-2 gap-x-3">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Age Group
              </label>
              <input
                type="text"
                value={form.ageGroup}
                name="ageGroup"
                onChange={handleChange}
                placeholder="Age Group"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Individuals
              </label>
              <input
                type="text"
                name="individuals"
                value={form.individuals}
                onChange={handleChange}
                placeholder="Individuals"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Communities
              </label>
              <input
                type="text"
                name="communities"
                value={form.communities}
                onChange={handleChange}
                placeholder=" Communities"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Faith
              </label>
              <input
                type="text"
                name="faith"
                value={form.faith}
                onChange={handleChange}
                placeholder="Faith"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">Insurance plane</h3>
          <div className="sm:grid sm:grid-cols-2 gap-x-3">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Insurance Detail
              </label>
              <input
                type="text"
                name="insurancePlane"
                value={form.insurancePlane}
                onChange={handleChange}
                placeholder="insurance"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">Bank Detail</h3>
          <div className="sm:grid sm:grid-cols-2 gap-x-3 my-5">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Account Detail
              </label>
              <input
                type="text"
                name="accountTitle"
                value={form.accountTitle}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Account Number
              </label>
              <input
                type="text"
                name="accountNumber"
                value={form.accountNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Bank Name
              </label>
              <input
                type="text"
                name="bankName"
                value={form.bankName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
              />
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
    </>
  );
};

export default DoctorRegisterForm;