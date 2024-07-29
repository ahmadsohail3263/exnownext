import Button from "@/components/Button";
import Input from "@/components/Input";
import { MdLocationOn, MdLocalPhone, MdMessage  } from "react-icons/md";
import { FaFacebook ,FaInstagramSquare,FaTwitter  } from "react-icons/fa";
import Image from "next/image";
import contactImage from '@/public/contactus.png'


const page = () => {
  const handleChange = {

  }
  return (
    <section>
      <div>
        <div className="bg-[#2C7B63] flex flex-col items-center py-14">
          <h1 className="text-4xl font-bold text-white">GET IN TOUCH</h1>

          <div className="grid sm:grid-cols-3 justify-items-center max-w-[1200px] mt-10 gap-y-4">
            <div className="flex flex-col items-center gap-y-4">
              <div className="w-14 h-14 bg-white bg-opacity-20 flex flex-col justify-center items-center rounded-full">
                <MdLocationOn className=" text-4xl text-white " />
              </div>
              <h2 className="text-2xl font-semibold text-white">Address</h2>
              <p className="font-normal text-white text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className="flex flex-col items-center gap-y-4">
              <div className="w-14 h-14 bg-white bg-opacity-20 flex flex-col justify-center items-center rounded-full">
                <MdLocalPhone className=" text-4xl text-white " />
              </div>
              <h2 className="text-2xl font-semibold text-white">Phone</h2>
              <p className="font-normal text-white">+123 3456 789</p>
            </div>

            <div className="flex flex-col items-center gap-y-4">
              <div className="w-14 h-14 bg-white bg-opacity-20 flex flex-col justify-center items-center rounded-full">
                <MdMessage className=" text-4xl text-white " />
              </div>
              <h2 className="text-2xl font-semibold text-white">Message</h2>
              <p className="font-normal text-white">lorem@gamil.com</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 max-w-[1200px] xl:mx-auto my-16 mx-4 gap-y-4">
          {/* message */}
          <div>


            <div>


              <Image src={contactImage.src} width={300 } height={300}/>
            </div>
            <h2 className="text-2xl font-bold mb-4">Message Us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>

            <div className="flex gap-x-2 mt-2">
            <FaFacebook className="text-2xl text-[#2C7B63]"/>
            <FaInstagramSquare className="text-2xl text-[#2C7B63]"/>
            <FaTwitter className="text-2xl text-[#2C7B63]"/>

            </div>
          </div>
          {/* form */}
          <div>
<form>
<Input
                type="text"
                name="name"
                title="Name"
               
              />
              <Input
                type="mail"
                name="mail"
                title="Email"
              />
              <Input
                type="text"
                name="subject"
                title="Subject"
              />
<div>
              <label className="block text-sm font-medium text-gray-700">
Message              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
                name="bio"
              />
            </div>
            <Button label ="submit"/>







</form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
