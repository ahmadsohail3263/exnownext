"use client";
import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { FaEye } from "react-icons/fa";
import Link from "next/link";

const Table = () => {
  const data = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      designation: "Manager",
      rating: 4.5,
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      designation: "Developer",
      rating: 4.8,
    },
    // Add more data as needed
  ];

  return (
    <div className="overflow-x-auto p-2 ">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 bg-[#2C7B63] text-center text-sm leading-4 text-white uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 bg-[#2C7B63] text-center text-sm leading-4 text-white uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 bg-[#2C7B63] text-center text-sm leading-4 text-white uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 bg-[#2C7B63] text-center text-sm leading-4 text-white uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 bg-[#2C7B63] text-center text-sm leading-4 text-white uppercase tracking-wider">
              Designation
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 bg-[#2C7B63] text-center text-sm leading-4 text-white uppercase tracking-wider">
              Rating
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 bg-[#2C7B63] text-center text-sm leading-4 text-white uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-center text-gray-700">
                {index}
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-center  text-gray-700">
                {item.name}
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-center text-gray-700">
                {item.email}
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-center text-gray-700">
                {item.phone}
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-center text-gray-700">
                {item.designation}
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-center text-gray-700">
                <div className="flex justify-center items-center gap-x-2 ">
                  <span className="text-lg text-yellow-300">
                    {" "}
                    <RiStarSFill />
                  </span>
                  {item.rating}
                </div>
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-gray-700 ">
                <div className="flex gap-x-2 justify-center items-center">
                  <Link href="/dashboard/profileview">
                    <FaEye className="text-blue-700 pr-2 text-2xl" />
                  </Link>

                  <Link href="/dashboard/profileedit">
                    <FaPenToSquare className=" text-green-500 pr-2 text-xl" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
