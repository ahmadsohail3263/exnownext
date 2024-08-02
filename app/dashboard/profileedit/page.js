import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { MdOutlineDangerous } from "react-icons/md";

const page = () => {
  return (
    <div className="p-10">
      <div className="flex justify-center sm:justify-end gap-x-2	">
      
          <Link
            href="#"
            class=" px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            <MdDelete className="mx-1" />
            Delete
          </Link>
          <Link href="/dashboard/profileban"
            type="button"
            class=" px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <MdOutlineDangerous className="mx-1 text-[16px]" />
            Temprary Ban
          </Link>
        </div>
        <h1 className="text-3xl font-bold my-6">Profile Edit</h1>
      
      
      <form>
        <div className="sm:grid sm:grid-cols-2 gap-x-4">
          <Input title="Name" name="name" id="name" />
          <Input title="Email" name="mail" id="mail" />
          <Input title="Phone" name="phone" id="phone" />
          <Input title="Designation" name="designation" id="designation" />
        </div>
        <Button label="Update" />
      </form>
    </div>
  );
};

export default page;
